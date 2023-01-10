import { TWSOrder } from "./data";

export type TOrders = {
  orders: Array<TWSOrder>;
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
  orders: Array<TWSOrder> | null;
  total: number | null;
  totalToday: number | null;
  error: string;
};
