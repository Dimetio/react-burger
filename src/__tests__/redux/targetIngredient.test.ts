import {
  DELETE_TARGET_INGREDIENT,
  GET_TARGET_INGREDIENT,
} from "../../services/constants/targetIngredient";
import targetIngredientReducer, {
  initialState,
} from "../../services/reducers/targetIngredient";
import { mockIngredient } from "../../utils/mock-data";

describe("number-order reducer", () => {
  it("should return the initial state", () => {
    expect(targetIngredientReducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle GET_TARGET_INGREDIENT", () => {
    expect(
      targetIngredientReducer(initialState, {
        type: GET_TARGET_INGREDIENT,
        ingredient: mockIngredient,
      })
    ).toEqual({
      ...initialState,
      ingredient: mockIngredient,
    });
  });

  it("should handle DELETE_TARGET_INGREDIENT", () => {
    expect(
      targetIngredientReducer(initialState, {
        type: DELETE_TARGET_INGREDIENT,
      })
    ).toEqual({
      ...initialState,
      ingredient: null,
    });
  });
});
