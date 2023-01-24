import ingredientsReducer, {
  initialState,
} from "../../services/reducers/ingredients";

import { mockIngredient } from "../../utils/mock-data";
import {
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../../services/constants/inhredients";

describe("ingredients reducer", () => {
  it("should return the initial state", () => {
    expect(ingredientsReducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle GET_INGREDIENTS_REQUEST", () => {
    expect(
      ingredientsReducer(initialState, {
        type: GET_INGREDIENTS_REQUEST,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it("should handle GET_INGREDIENTS_SUCCESS", () => {
    expect(
      ingredientsReducer(initialState, {
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: [mockIngredient],
      })
    ).toEqual({
      ...initialState,
      ingredients: [mockIngredient],
      isLoading: false,
    });
  });

  it("should handle GET_INGREDIENTS_ERROR", () => {
    expect(
      ingredientsReducer(initialState, {
        type: GET_INGREDIENTS_ERROR,
      })
    ).toEqual({
      ...initialState,
      ingredients: [],
      hasError: true,
      isLoading: false,
    });
  });
});
