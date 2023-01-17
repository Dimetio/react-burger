import * as api from "../../utils/api";

import { AppThunk, AppDispatch } from "../types";

import {
  GET_NUMBER_ORDER_REQUEST,
  GET_NUMBER_ORDER_SUCCESS,
  GET_NUMBER_ORDER_ERROR,
} from "../constants/number-order";

type TGetNumberOrderRequset = {
  readonly type: typeof GET_NUMBER_ORDER_REQUEST;
};

type TGetNumberOrderSuccess = {
  readonly type: typeof GET_NUMBER_ORDER_SUCCESS;
  order: number;
};

type TGetNumberOrderError = {
  readonly type: typeof GET_NUMBER_ORDER_ERROR;
};

export type TNumberOrderActions =
  | TGetNumberOrderRequset
  | TGetNumberOrderSuccess
  | TGetNumberOrderError;

export const getNumberOrder = (ingredientsId: string[]): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_NUMBER_ORDER_REQUEST,
    });
    api
      .getOrder(ingredientsId)
      .then((data) => {
        dispatch({
          type: GET_NUMBER_ORDER_SUCCESS,
          order: data.order.number,
        });
      })
      .catch(() => {
        dispatch({
          type: GET_NUMBER_ORDER_ERROR,
        });
      });
  };
};
