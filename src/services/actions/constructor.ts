import { v1 as random } from "uuid";

import {
  ADD_INGREDIENT_CONSTRUCTOR,
  DELETE_INGREDIENT_CONSTRUCTOR,
  UPDATE_INGREDIENT_CONSTRUCTOR,
  CLEAR_INGREDIENT_CONSTRUCTOR,
  ADD_BUNS_CONSTRUCTOR,
} from "../constans/constructor";

import { TConstructorIngredient, TIngredient } from "../../utils/types";

type TAddIngredientConstructor = {
  readonly type: typeof ADD_INGREDIENT_CONSTRUCTOR;
  readonly data: TConstructorIngredient;
  readonly dndid: string;
};

type TDeleteIngredientConstructor = {
  readonly type: typeof DELETE_INGREDIENT_CONSTRUCTOR;
  readonly data: TConstructorIngredient;
};

type TUpdateIngredientConstructor = {
  readonly type: typeof UPDATE_INGREDIENT_CONSTRUCTOR;
  readonly data: TConstructorIngredient;
};

type TClearIngredientConstructor = {
  readonly type: typeof CLEAR_INGREDIENT_CONSTRUCTOR;
};

type TAddBunsConstructor = {
  readonly type: typeof ADD_BUNS_CONSTRUCTOR;
  readonly data: TIngredient;
};

export type TConstructorACtions =
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
    dndid: random(),
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
  data: TConstructorIngredient
): TUpdateIngredientConstructor => {
  return {
    type: UPDATE_INGREDIENT_CONSTRUCTOR,
    data,
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
