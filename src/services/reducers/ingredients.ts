import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../constans/inhredients";

import { TIngredient } from "../../utils/types";

import { TIngredientsActons } from "../actions/ingredients";

type TInitialState = {
  ingredients: null | ReadonlyArray<TIngredient>;
  isLoading: boolean;
  hasError: boolean;
};

const initialState: TInitialState = {
  ingredients: null,
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
        ingredients: action.ingredients,
      };
    case GET_INGREDIENTS_ERROR:
      return {
        ingredients: null,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}
