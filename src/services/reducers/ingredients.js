import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from '../actions/ingredients'

const initialState = {
  ingredients: [],
  isLoading: false,
  hasError: false,
}

export default function ingredientsReducer(state = initialState, action) {
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
    case GET_INGREDIENTS_ERROR:
      return {
        ingredients: [],
          isLoading: false,
          hasError: true,
      };
    default:
      return state
  }
}