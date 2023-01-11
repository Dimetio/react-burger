import * as api from "../../utils/api";
import { AppThunk, AppDispatch } from "../types";

import {
  GET_ORDER_ITEM_REQUEST,
  GET_ORDER_ITEM_SUCCESS,
  GET_ORDER_ITEM_ERROR,
} from "../constants/order-item";
import { TOrder } from "../types/data";

type TGetOrderItemRequset = {
  readonly type: typeof GET_ORDER_ITEM_REQUEST;
};

type TGetOrderItemSuccess = {
  readonly type: typeof GET_ORDER_ITEM_SUCCESS;
  order: TOrder;
};

type TGetOrderItemError = {
  readonly type: typeof GET_ORDER_ITEM_ERROR;
};

export type TOrderItemActions =
  | TGetOrderItemRequset
  | TGetOrderItemSuccess
  | TGetOrderItemError;

export const getOrderItem = (number: string): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_ORDER_ITEM_REQUEST,
    });
    api
      .getOrderItem(number)
      .then((data) => {
        dispatch({
          type: GET_ORDER_ITEM_SUCCESS,
          order: data.orders[0],
        });
      })
      .catch(() => {
        dispatch({
          type: GET_ORDER_ITEM_ERROR,
        });
      });
  };
};
