import constructorReducer, {
  initialState,
} from "../../services/reducers/constructor";

import {
  addIngredientConstructor,
  deleteIngredientConstructor,
  updateIngredientConstructor,
  clearIngredientConstructor,
  addBunsConstructor,
} from "../../services/actions/constructor";

import { mockConstructorIngredient, mockBun, mockIngredient } from "../../utils/mock-data";

describe("constructor reducer", () => {
  it("should return the initial state", () => {
    expect(constructorReducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle ADD_INGREDIENT_CONSTRUCTOR", () => {
    expect(
      constructorReducer(
        initialState,
        addIngredientConstructor(mockConstructorIngredient)
      )
    ).toEqual({
      ...initialState,
      ingredients: [mockConstructorIngredient],
    });
  });

  // it("should handle UPDATE_INGREDIENT_CONSTRUCTOR", () => {
  //   expect(
  //     constructorReducer(initialState, updateIngredientConstructor(1, 2))
  //   ).toEqual({
  //     ...initialState,
  //     ingredients: [mockIngredient, mockIngredient],
  //   });
  // });

  it("should handle DELETE_INGREDIENT_CONSTRUCTOR", () => {
    expect(
      constructorReducer(
        initialState,
        deleteIngredientConstructor(mockConstructorIngredient)
      )
    ).toEqual({
      ...initialState,
      ingredients: [...initialState.ingredients].filter(
        (item) => item._dndid !== mockConstructorIngredient._dndid
      ),
    });
  });

  it("should handle CLEAR_INGREDIENT_CONSTRUCTOR", () => {
    expect(
      constructorReducer(initialState, clearIngredientConstructor())
    ).toEqual({
      ...initialState,
      ingredients: [],
      bun: null,
    });
  });

  it("should handle ADD_BUNS_CONSTRUCTOR", () => {
    expect(
      constructorReducer(initialState, addBunsConstructor(mockBun))
    ).toEqual({
      ...initialState,
      bun: mockBun,
    });
  });
});
