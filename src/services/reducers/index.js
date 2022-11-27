import {
  combineReducers
} from "redux";

import order from '../reducers/order'
import totalPrice from '../reducers/totalPrice'
import constructorIngredients from '../reducers/constructor'
import targetIngredient from '../reducers/targetIngredient'
import ingredients from '../reducers/ingredients'
import auth from '../reducers/auth'

export const rootReducer = combineReducers({
  ingredients,
  targetIngredient,
  constructorIngredients,
  order,
  totalPrice,
  auth,
})