export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
export const RESET_TOTAL_PRICE = 'RESET_TOTAL_PRICE';
export const GET_TOTAL_PRICE = 'GET_TOTAL_PRICE';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export const GET_TARGET_INGREDIENT = 'GET_TARGET_INGREDIENT';
export const DELETE_TARGET_INGREDIENT = 'DELETE_TARGET_INGREDIENT';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return res.json()
    .then((data) => {
      throw new Error(data.message)
    });
};

export const getIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    })
    fetch('https://norma.nomoreparties.space/api/ingredients')
      .then(checkResponse)
      .then((data) => {
        // console.log(data.data)
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: data.data,
        })
        .catch((err) => {
          // console.log(err.message)
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          })
        })
      })
  }
}