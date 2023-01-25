import {
  GET_TARGET_INGREDIENT,
  DELETE_TARGET_INGREDIENT,
} from "../constants/targetIngredient";

import { TIngredient } from "../types/data";

import type { TTargetIngredientActions } from "../actions/targetIngredient";

type TInitialState = {
  readonly ingredient: null | TIngredient;
};

export const initialState: TInitialState = {
  ingredient: null,
};

export default function targetIngredientReducer(
  state = initialState,
  action: TTargetIngredientActions
): TInitialState {
  switch (action.type) {
    case GET_TARGET_INGREDIENT:
      return {
        ...state,
        ingredient: action.ingredient,
      };
    case DELETE_TARGET_INGREDIENT:
      return {
        ...state,
        ingredient: null,
      };
    default:
      return state;
  }
}
