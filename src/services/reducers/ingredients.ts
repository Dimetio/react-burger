import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../constants/inhredients";

import { TIngredient } from "../types/data";

import { TIngredientsActons } from "../actions/ingredients";

type TInitialState = {
  ingredients: TIngredient[];
  isLoading: boolean;
  hasError: boolean;
};

export const initialState: TInitialState = {
  ingredients: [],
  isLoading: false,
  hasError: false,
};

export default function ingredientsReducer(
  state = initialState,
  action: TIngredientsActons
): TInitialState {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ingredients: [...action.ingredients],
      };
    case GET_INGREDIENTS_ERROR:
      return {
        ingredients: [],
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}
