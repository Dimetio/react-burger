import {
  ADD_INGREDIENT_CONSTRUCTOR,
  DELETE_INGREDIENT_CONSTRUCTOR,
  UPDATE_INGREDIENT_CONSTRUCTOR,
  CLEAR_INGREDIENT_CONSTRUCTOR,
  ADD_BUNS_CONSTRUCTOR,
} from "../constants/constructor";

import { TConstructorIngredient, TIngredient } from "../types/data";

type TAddIngredientConstructor = {
  readonly type: typeof ADD_INGREDIENT_CONSTRUCTOR;
  readonly data: TConstructorIngredient;
};

type TDeleteIngredientConstructor = {
  readonly type: typeof DELETE_INGREDIENT_CONSTRUCTOR;
  readonly data: TConstructorIngredient;
};

type TUpdateIngredientConstructor = {
  readonly type: typeof UPDATE_INGREDIENT_CONSTRUCTOR;
  readonly payload: { dragIndex: number; hoverIndex: number };
};

type TClearIngredientConstructor = {
  readonly type: typeof CLEAR_INGREDIENT_CONSTRUCTOR;
};

type TAddBunsConstructor = {
  readonly type: typeof ADD_BUNS_CONSTRUCTOR;
  readonly data: TIngredient;
};

export type TConstructorActions =
  | TAddIngredientConstructor
  | TDeleteIngredientConstructor
  | TUpdateIngredientConstructor
  | TClearIngredientConstructor
  | TAddBunsConstructor;

export const addIngredientConstructor = (
  data: TConstructorIngredient
): TAddIngredientConstructor => {
  return {
    type: ADD_INGREDIENT_CONSTRUCTOR,
    data,
  };
};

export const deleteIngredientConstructor = (
  data: TConstructorIngredient
): TDeleteIngredientConstructor => {
  return {
    type: DELETE_INGREDIENT_CONSTRUCTOR,
    data,
  };
};

export const updateIngredientConstructor = (
  dragIndex: number,
  hoverIndex: number
): TUpdateIngredientConstructor => {
  return {
    type: UPDATE_INGREDIENT_CONSTRUCTOR,
    payload: { dragIndex, hoverIndex },
  };
};

export const clearIngredientConstructor = (): TClearIngredientConstructor => {
  return {
    type: CLEAR_INGREDIENT_CONSTRUCTOR,
  };
};

export const addBunsConstructor = (data: TIngredient): TAddBunsConstructor => {
  return {
    type: ADD_BUNS_CONSTRUCTOR,
    data,
  };
};
