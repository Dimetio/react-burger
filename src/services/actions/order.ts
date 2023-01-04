import * as api from "../../utils/api";

import { AppThunk, AppDispatch } from "../types";

import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
} from "../constans/order";

type TGetOrderRequset = {
  readonly type: typeof GET_ORDER_REQUEST;
};

type TGetOrderSuccess = {
  readonly type: typeof GET_ORDER_SUCCESS;
  order: number;
};

type TGetOrderError = {
  readonly type: typeof GET_ORDER_ERROR;
};

export type TOrderActions =
  | TGetOrderRequset
  | TGetOrderSuccess
  | TGetOrderError;

export const getOrder: AppThunk = (ingredientsId: Array<number>) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    api
      .getOrder(ingredientsId)
      .then((data) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          order: data.order.number,
        });
      })
      .catch(() => {
        dispatch({
          type: GET_ORDER_ERROR,
        });
      });
  };
};
