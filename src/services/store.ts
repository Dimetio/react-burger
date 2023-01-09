import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../services/reducers/index";
import { socketMiddleware } from "../services/middleware";

import {
  WS_COMMON_CLOSE,
  WS_COMMON_CONNECT,
  WS_COMMON_CONNECTING,
  WS_COMMON_DISCONNECT,
  WS_COMMON_ERROR,
  WS_COMMON_MESSAGE,
  WS_COMMON_OPEN,
} from "./constants/ws-common";

import {
  WS_PROFILE_CONNECT,
  WS_PROFILE_DISCONNECT,
  WS_PROFILE_CONNECTING,
  WS_PROFILE_OPEN,
  WS_PROFILE_CLOSE,
  WS_PROFILE_ERROR,
  WS_PROFILE_MESSAGE,
} from "./constants/ws-profile";

// еще один вариант, который пускает
//declare const window: any;
// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const commonMiddleware = socketMiddleware({
  wsConnect: WS_COMMON_CONNECT,
  wsDisconnect: WS_COMMON_DISCONNECT,

  wsConnecting: WS_COMMON_CONNECTING,
  onOpen: WS_COMMON_OPEN,
  onClose: WS_COMMON_CLOSE,
  onError: WS_COMMON_ERROR,
  onMessage: WS_COMMON_MESSAGE,
});

const profileMiddleware = socketMiddleware({
  wsConnect: WS_PROFILE_CONNECT,
  wsDisconnect: WS_PROFILE_DISCONNECT,

  wsConnecting: WS_PROFILE_CONNECTING,
  onOpen: WS_PROFILE_OPEN,
  onClose: WS_PROFILE_CLOSE,
  onError: WS_PROFILE_ERROR,
  onMessage: WS_PROFILE_MESSAGE,
});

const enhancer = composeEnhancers(
  applyMiddleware(thunk, commonMiddleware, profileMiddleware)
);

export const store = createStore(rootReducer, enhancer);
