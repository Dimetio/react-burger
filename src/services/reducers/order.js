import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
} from '../actions/order'

const initialState = {
  order: null,
  isLoading: false,
  hasError: false,
}

export default function orderReducer(state = initialState, action) {
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
