import { getBurgers } from "../../utils/api";

import { AppThunk, AppDispatch } from "../types";

import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../constans/inhredients";

import { TIngredient } from "../../utils/types";

type TGetIngredientsRequest = {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
};

type TGetIngredientsSuccess = {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  ingredients: TIngredient[];
};

type TGetIngredientsError = {
  readonly type: typeof GET_INGREDIENTS_ERROR;
};

export type TIngredientsActons =
  | TGetIngredientsRequest
  | TGetIngredientsSuccess
  | TGetIngredientsError;

export const getIngredients = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    getBurgers()
      .then((data) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: data.data,
        });
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({
          type: GET_INGREDIENTS_ERROR,
        });
      });
  };
};
