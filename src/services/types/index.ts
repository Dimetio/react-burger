import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";

import { store } from "../store";
import { TConstructorActions } from "../actions/constructor";
import { TTargetIngredientActions } from "../actions/targetIngredient";
import { TOrderActions } from "../actions/order";
import { TIngredientsActons } from "../actions/ingredients";

export type RootState = ReturnType<typeof store.getState>;

// Типизация всех экшенов приложения
type TApplicationActions =
  | TConstructorActions
  | TTargetIngredientActions
  | TOrderActions
  | TIngredientsActons;

// Типизация thunk'ов в нашем приложении
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = typeof store.dispatch;
