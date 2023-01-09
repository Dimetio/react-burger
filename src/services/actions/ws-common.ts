import {
  WS_COMMON_CLOSE,
  WS_COMMON_CONNECT,
  WS_COMMON_CONNECTING,
  WS_COMMON_DISCONNECT,
  WS_COMMON_ERROR,
  WS_COMMON_MESSAGE,
  WS_COMMON_OPEN,
} from "../constants/ws-common";

import { TWSOrders } from "../types/data";

import { createAction } from "@reduxjs/toolkit";

// type TWSCommonConnect = {
//   readonly type: typeof WS_COMMON_CONNECT;
//   payload: string;
// };

// type TWSCommonDisconnect = {
//   readonly type: typeof WS_COMMON_DISCONNECT;
// };

type TWSCommonConnecting = {
  readonly type: typeof WS_COMMON_CONNECTING;
};

type TWSCommonOpen = {
  readonly type: typeof WS_COMMON_OPEN;
};

type TWSCommonClose = {
  readonly type: typeof WS_COMMON_CLOSE;
};

type TWSCommonError = {
  readonly type: typeof WS_COMMON_ERROR;
  payload: string;
};

type TWSCommonMessage = {
  readonly type: typeof WS_COMMON_MESSAGE;
  payload: TWSOrders;
};

export const commonConnect = createAction<string, typeof WS_COMMON_CONNECT>(
  WS_COMMON_CONNECT
);

export const commonDisconnect = createAction(WS_COMMON_DISCONNECT);

export type TWSCommonActions =
  | ReturnType<typeof commonConnect>
  | ReturnType<typeof commonDisconnect>
  //| TWSCommonConnect
  //| TWSCommonDisconnect
  | TWSCommonConnecting
  | TWSCommonOpen
  | TWSCommonClose
  | TWSCommonError
  | TWSCommonMessage;
