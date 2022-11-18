import {
  v1 as random
} from 'uuid';

const BASE_URL = 'https://norma.nomoreparties.space/api';

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

export const ADD_INGREDIENT_CONSTRUCTOR = 'ADD_INGREDIENT_CONSTRUCTOR';
export const DELETE_INGREDIENT_CONSTRUCTOR = 'DELETE_INGREDIENT_CONSTRUCTOR';
export const UPDATE_INGREDIENT_CONSTRUCTOR = 'UPDATE_INGREDIENT_CONSTRUCTOR';
export const CLEAR_INGREDIENT_CONSTRUCTOR = 'CLEAR_INGREDIENT_CONSTRUCTOR';
export const ADD_BUNS_CONSTRUCTOR = 'ADD_BUNS_CONSTRUCTOR';

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
          type: GET_INGREDIENTS_FAILED,
        })
      })
  }
}

export const addIngredientConstructor = (data) => {
  return {
    type: ADD_INGREDIENT_CONSTRUCTOR,
    data,
    dndid: random(),
  };
};

export const deleteIngredientConstructor = (data) => {
  return {
    type: DELETE_INGREDIENT_CONSTRUCTOR,
    data,
  };
};

export const updateIngredientConstructor = (data) => {
  return {
    type: UPDATE_INGREDIENT_CONSTRUCTOR,
    data,
  };
};

export const clearIngredientConstructor = () => {
  return {
    type: CLEAR_INGREDIENT_CONSTRUCTOR,
  };
};

export const addBunsConstructor = (data) => {
  return {
    type: ADD_BUNS_CONSTRUCTOR,
    data,
  };
};

export const getOrder = (ingredientsId) => {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST
    })
    fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ingredients: ingredientsId
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
          type: GET_ORDER_FAILED,
        })
      })
  }
}

export const getTotalPrice = (ingredients, bun) => {
  return {
    type: GET_TOTAL_PRICE,
    bun,
    ingredients,
  }
}

export const getTargetIngredient = (ingredient) => {
  return {
    type: GET_TARGET_INGREDIENT,
    ingredient
  }
}

export const deleteTargetIngredient = () => {
  return {
    type: DELETE_TARGET_INGREDIENT
  }
}