import {
  BASE_URL
} from '../../utils/constants'
import {
  getCookie
} from '../../utils/cookie';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return res.json()
    .then((data) => {
      throw new Error(data.message)
    });
};

export default function getOrder(ingredientsId) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST
    })
    fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
          "Authorization": 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify({
          ingredients: ingredientsId,
        })
      })
      .then(checkResponse)
      .then((data) => {
        // console.log(data.order)
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