import { ThunkAction } from "redux-thunk";
import { TConstructorActions } from "../actions/constructor";
import { TTargetIngredientActions } from "../actions/targetIngredient";
import { TOrderActions } from "../actions/order";
import { TIngredientsActons } from "../actions/ingredients";
import { TAuthActions } from "../actions/auth";
import { rootReducer } from "../reducers";

export type RootState = ReturnType<typeof rootReducer>;

// Типизация всех экшенов приложения
type AppActions =
  | TConstructorActions
  | TTargetIngredientActions
  | TOrderActions
  | TIngredientsActons
  | TAuthActions;

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
