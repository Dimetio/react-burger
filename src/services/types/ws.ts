import { TOrder } from "./data";

export type TOrders = {
  orders: Array<TOrder>;
  total: number;
  totalToday: number;
};

export enum WebsocketStatus {
  CONNECTING = "CONNECTING...",
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
}

export type TWSState = {
  status: WebsocketStatus;
  orders: Array<TOrder> | null;
  total: number | null;
  totalToday: number | null;
  error: string;
};
