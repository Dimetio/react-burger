import { TWSCommonActions } from "../actions/ws-common";
import { TWSState, WebsocketStatus } from "../types/ws";
import {
  WS_COMMON_CONNECTING,
  WS_COMMON_OPEN,
  WS_COMMON_ERROR,
  WS_COMMON_MESSAGE,
  WS_COMMON_CLOSE,
} from "../constants/ws-common";

const { CONNECTING, ONLINE, OFFLINE } = WebsocketStatus;

const initialState: TWSState = {
  status: OFFLINE,
  orders: null,
  connectionError: "",
};

export default function wsCommonReducer(
  state = initialState,
  action: TWSCommonActions
) {
  switch (action.type) {
    case WS_COMMON_CONNECTING:
      return {
        ...state,
        status: CONNECTING,
      };

    case WS_COMMON_OPEN:
      return {
        ...state,
        status: ONLINE,
        connectionError: "",
      };

    case WS_COMMON_CLOSE:
      return {
        ...state,
        status: OFFLINE,
      };

    case WS_COMMON_ERROR:
      return {
        ...state,
        connectionError: action.payload,
      };

    case WS_COMMON_MESSAGE:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
}
