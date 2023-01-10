import { combineReducers } from "redux";

import order from "./order";
import constructorIngredients from "./constructor";
import targetIngredient from "./targetIngredient";
import ingredients from "./ingredients";
import auth from "./auth";
import wsCommon from "./ws-common";
import wsProfile from "./ws-profile";

export const rootReducer = combineReducers({
  ingredients,
  targetIngredient,
  constructorIngredients,
  order,
  auth,
  wsCommon,
  wsProfile,
});
