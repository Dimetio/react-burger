import {
  GET_NUMBER_ORDER_REQUEST,
  GET_NUMBER_ORDER_SUCCESS,
  GET_NUMBER_ORDER_ERROR,
} from "../constants/number-order";

import { TNumberOrderActions } from "../actions/number-order";

type TInitialState = {
  order: null | number;
  isLoading: boolean;
  hasError: boolean;
};

export const initialState: TInitialState = {
  order: null,
  isLoading: false,
  hasError: false,
};

export default function numberOrderReducer(
  state = initialState,
  action: TNumberOrderActions
): TInitialState {
  switch (action.type) {
    case GET_NUMBER_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_NUMBER_ORDER_SUCCESS:
      return {
        ...state,
        order: action.order,
        isLoading: false,
      };
    case GET_NUMBER_ORDER_ERROR:
      return {
        order: null,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
}
