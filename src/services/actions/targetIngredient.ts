import {
  GET_TARGET_INGREDIENT,
  DELETE_TARGET_INGREDIENT,
} from "../constants/targetIngredient";

import { TIngredient } from "../types/data";

type TGetTargetIngredient = {
  readonly type: typeof GET_TARGET_INGREDIENT;
  readonly ingredient: TIngredient;
};

type TDeleteTargetIngredient = {
  readonly type: typeof DELETE_TARGET_INGREDIENT;
};

export type TTargetIngredientActions =
  | TGetTargetIngredient
  | TDeleteTargetIngredient
  | TDeleteTargetIngredient;

export const getTargetIngredient = (
  ingredient: TIngredient
): TGetTargetIngredient => {
  return {
    type: GET_TARGET_INGREDIENT,
    ingredient,
  };
};

export const deleteTargetIngredient = (): TDeleteTargetIngredient => {
  return {
    type: DELETE_TARGET_INGREDIENT,
  };
};
