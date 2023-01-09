import { ThunkAction } from "redux-thunk";
import { TConstructorActions } from "../actions/constructor";
import { TTargetIngredientActions } from "../actions/targetIngredient";
import { TOrderActions } from "../actions/order";
import { TIngredientsActons } from "../actions/ingredients";
import { TAuthActions } from "../actions/auth";
import { TWSCommonActions } from "../actions/ws-common";
import { rootReducer } from "../reducers";
import { TWSProfileActions } from "../actions/ws-profile";

export type RootState = ReturnType<typeof rootReducer>;

// Типизация всех экшенов приложения
export type AppActions =
  | TConstructorActions
  | TTargetIngredientActions
  | TOrderActions
  | TIngredientsActons
  | TAuthActions
  | TWSCommonActions
  | TWSProfileActions;

// Типизация thunk'ов в нашем приложении
export type AppThunk<TReturn = void> = ThunkAction<
  TReturn,
  RootState,
  unknown,
  AppActions
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch<TReturn = void> = (
  action: AppActions | AppThunk<TReturn>
) => TReturn;
