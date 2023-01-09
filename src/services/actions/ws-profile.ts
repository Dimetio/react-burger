import {
  WS_PROFILE_CONNECT,
  WS_PROFILE_DISCONNECT,
  WS_PROFILE_CONNECTING,
  WS_PROFILE_OPEN,
  WS_PROFILE_CLOSE,
  WS_PROFILE_ERROR,
  WS_PROFILE_MESSAGE,
} from "../constants/ws-profile";

import { TWSOrders } from "../types/data";

import { createAction } from "@reduxjs/toolkit";

export const profileConnect = createAction<string, typeof WS_PROFILE_CONNECT>(
  WS_PROFILE_CONNECT
);

export const profileDisconnect = createAction(WS_PROFILE_DISCONNECT);

type TWSProfileConnecting = {
  readonly type: typeof WS_PROFILE_CONNECTING;
};

type TWSProfileOpen = {
  readonly type: typeof WS_PROFILE_OPEN;
};

type TWSProfileClose = {
  readonly type: typeof WS_PROFILE_CLOSE;
};

type TWSProfileError = {
  readonly type: typeof WS_PROFILE_ERROR;
  payload: string;
};

type TWSProfileMessage = {
  readonly type: typeof WS_PROFILE_MESSAGE;
  payload: TWSOrders;
};

export type TWSProfileActions =
  | ReturnType<typeof profileConnect>
  | ReturnType<typeof profileDisconnect>
  | TWSProfileConnecting
  | TWSProfileOpen
  | TWSProfileClose
  | TWSProfileError
  | TWSProfileMessage;
