import { combineReducers } from "redux";

import numberOrder from "./number-order";
import constructorIngredients from "./constructor";
import targetIngredient from "./targetIngredient";
import ingredients from "./ingredients";
import auth from "./auth";
import wsCommon from "./ws-common";
import wsProfile from "./ws-profile";
import orderItemReducer from "./order-item";

export const rootReducer = combineReducers({
  ingredients,
  targetIngredient,
  constructorIngredients,
  numberOrder,
  auth,
  wsCommon,
  wsProfile,
  orderItemReducer,
});
