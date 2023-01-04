import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
} from "../constans/order";

import { TOrderActions } from "../actions/order";

type TInitialState = {
  order: null | number;
  isLoading: boolean;
  hasError: boolean;
};

const initialState: TInitialState = {
  order: null,
  isLoading: false,
  hasError: false,
};

export default function orderReducer(
  state = initialState,
  action: TOrderActions
): TInitialState {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        order: action.order,
        isLoading: false,
      };
    case GET_ORDER_ERROR:
      return {
        order: null,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
}
