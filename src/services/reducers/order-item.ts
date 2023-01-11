import {
  GET_ORDER_ITEM_REQUEST,
  GET_ORDER_ITEM_SUCCESS,
  GET_ORDER_ITEM_ERROR,
} from "../constants/order-item";
import { TOrder } from "../types/data";
import { TOrderItemActions } from "../actions/order-item";

type TInitialState = {
  order: null | TOrder;
};

const initialState: TInitialState = {
  order: null,
};

export default function orderItemReducer(
  state = initialState,
  action: TOrderItemActions
): TInitialState {
  switch (action.type) {
    case GET_ORDER_ITEM_REQUEST:
      return {
        ...state,
      };
    case GET_ORDER_ITEM_SUCCESS:
      return {
        ...state,
        order: action.order,
      };
    case GET_ORDER_ITEM_ERROR:
      return {
        order: null,
      };
    default:
      return state;
  }
}
