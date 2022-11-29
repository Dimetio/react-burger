import {
  ADD_INGREDIENT_CONSTRUCTOR,
  DELETE_INGREDIENT_CONSTRUCTOR,
  UPDATE_INGREDIENT_CONSTRUCTOR,
  CLEAR_INGREDIENT_CONSTRUCTOR,
  ADD_BUNS_CONSTRUCTOR,
} from '../actions/constructor'

const initialState = {
  bun: null,
  ingredients: [],
}

export default function constructorReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INGREDIENT_CONSTRUCTOR:
      return {
        ...state,
        ingredients: [...state.ingredients, {
          ...action.data,
          _dndid: action.dndid
        }],
      };
    case DELETE_INGREDIENT_CONSTRUCTOR:
      return {
        ...state,
        ingredients: state.ingredients.filter((item) => item._dndid !== action.data._dndid),
      };
    case UPDATE_INGREDIENT_CONSTRUCTOR:
      return {
        ...state,
        ingredients: [...action.data],
      };
    case CLEAR_INGREDIENT_CONSTRUCTOR:
      return {
        ...state,
        bun: null,
          ingredients: [],
      };
    case ADD_BUNS_CONSTRUCTOR:
      return {
        ...state,
        bun: action.data,
      };
    default:
      return state;
  }
}