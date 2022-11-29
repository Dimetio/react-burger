import getOrder from './order'

import getIngredients from './ingredients'

import {
  getTargetIngredient,
  deleteTargetIngredient
} from './targetIngredient'

import {
  addIngredientConstructor,
  deleteIngredientConstructor,
  updateIngredientConstructor,
  clearIngredientConstructor,
  addBunsConstructor,
} from './constructor'

import {
  registerAction,
  loginAction,
  logoutAction,
  getUserAction,
  updateUserAction
} from './auth'

export {
  getOrder,
  getIngredients,
  getTargetIngredient,
  deleteTargetIngredient,
  addIngredientConstructor,
  deleteIngredientConstructor,
  updateIngredientConstructor,
  clearIngredientConstructor,
  addBunsConstructor,
  registerAction,
  loginAction,
  logoutAction,
  getUserAction,
  updateUserAction
}

/** TODO:
/* Вынести этой из стора и вычислять useMemo прям в компоненте
**/
export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
export const RESET_TOTAL_PRICE = 'RESET_TOTAL_PRICE';
export const GET_TOTAL_PRICE = 'GET_TOTAL_PRICE';

export const getTotalPrice = (ingredients, bun) => {
  return {
    type: GET_TOTAL_PRICE,
    bun,
    ingredients,
  }
}