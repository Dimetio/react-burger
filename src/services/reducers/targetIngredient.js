import {
  GET_TARGET_INGREDIENT,
  DELETE_TARGET_INGREDIENT,
} from '../actions/index'

const initialState = {
  ingredient: {}
}

export default function targetIngredientReducer(state = initialState, action) {
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
    default:
      return state;
  }
}