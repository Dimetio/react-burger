import {
  getBurgers
} from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

export default function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    })
    getBurgers()
      .then((data) => {
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