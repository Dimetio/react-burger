import {
  BASE_URL
} from '../../utils/constants'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return res.json()
    .then((data) => {
      throw new Error(data.message)
    });
};

export default function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    })
    fetch(`${BASE_URL}/ingredients`)
      .then(checkResponse)
      .then((data) => {
        // console.log(data.data)
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: data.data,
        })
      })
      .catch((err) => {
        console.log(err.message)
        dispatch({
          type: GET_INGREDIENTS_ERROR,
        })
      })
  }
}