import { ThunkAction } from "redux-thunk";
import { TConstructorActions } from "../actions/constructor";
import { TTargetIngredientActions } from "../actions/targetIngredient";
import { TNumberOrderActions } from "../actions/number-order";
import { TIngredientsActons } from "../actions/ingredients";
import { TAuthActions } from "../actions/auth";
import { TWSCommonActions } from "../actions/ws-common";
import { rootReducer } from "../reducers";
import { TWSProfileActions } from "../actions/ws-profile";
import { TOrderItemActions } from "../actions/order-item";

export type RootState = ReturnType<typeof rootReducer>;

// Типизация всех экшенов приложения
export type AppActions =
  | TConstructorActions
  | TTargetIngredientActions
  | TNumberOrderActions
  | TIngredientsActons
  | TAuthActions
  | TWSCommonActions
  | TWSProfileActions
  | TOrderItemActions;

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
