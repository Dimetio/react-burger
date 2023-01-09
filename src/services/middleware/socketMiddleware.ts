import type { Middleware } from "redux";
import type { RootState } from "../types";

export type TWsActionTypes = {
  wsConnect: string;
  wsDisconnect: string;

  wsSendMessage?: string;
  wsConnecting: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
};

export const socketMiddleware = (
  wsActions: TWsActionTypes
): Middleware<{}, RootState> => {
  return (store) => {
    const {
      wsConnect,
      wsDisconnect,
      wsSendMessage,
      wsConnecting,
      onOpen,
      onClose,
      onError,
      onMessage,
    } = wsActions;
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type } = action;

      if (type === wsConnect) {
        // объект класса WebSocket
        socket = new WebSocket(action.payload);
        dispatch({ type: wsConnecting });
      }

      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = () => {
          dispatch({ type: onOpen });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = () => {
          dispatch({ type: onError, payload: "Error" });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...orders } = parsedData;
          dispatch({ type: onMessage, payload: orders });
        };

        // функция, которая вызывается при закрытии соединения
        socket.onclose = () => {
          dispatch({ type: onClose });
        };

        if (wsSendMessage && type === wsSendMessage) {
          socket.send(JSON.stringify(action.payload));
        }

        if (type === wsDisconnect) {
          socket.close();
          socket = null;
        }
      }

      next(action);
    };
  };
};
