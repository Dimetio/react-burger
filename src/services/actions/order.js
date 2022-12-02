import * as api from '../../utils/api';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';

export default function getOrderAction(ingredientsId) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST
    })
      api.getOrder(ingredientsId)
      .then((data) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          order: data.order.number,
        })
      })
      .catch(() => {
        dispatch({
          type: GET_ORDER_ERROR,
        })
      })
  }
}