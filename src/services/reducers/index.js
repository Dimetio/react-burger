import {
  combineReducers
} from "redux";

import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_TARGET_INGREDIENT,
  DELETE_TARGET_INGREDIENT,
} from '../actions'

// стейт всех ингредиентов
const ingredientsInitialState = {
  ingredients: [],
  isLoading: false,
  hasError: false,
}

// стейт выбранного ингредиента
const targerIngredientInitialState = {
  ingredient: {}
}

const ingredientsReducer = (state = ingredientsInitialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
          ingredients: action.ingredients,
      };
    case GET_INGREDIENTS_FAILED:
      return {
        ...state,
        isLoading: false,
          hasError: true,
      };
    default: {
      return state
    }
  }
}

const targetIngredientReducer = (state = targerIngredientInitialState, action) => {
  switch (action.type) {
    case GET_TARGET_INGREDIENT:
      return {
        ...state,
        ingredient: action.ingredient,
      };
    case DELETE_TARGET_INGREDIENT:
      return {
        ...state,
        ingredient: {},
      };
    default: {
      return state;
    }
  }
}

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  targetIngredient: targetIngredientReducer,
})