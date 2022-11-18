import {
  combineReducers
} from "redux";

import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_TARGET_INGREDIENT,
  DELETE_TARGET_INGREDIENT,
  ADD_INGREDIENT_CONSTRUCTOR,
  DELETE_INGREDIENT_CONSTRUCTOR,
  UPDATE_INGREDIENT_CONSTRUCTOR,
  CLEAR_INGREDIENT_CONSTRUCTOR,
  ADD_BUNS_CONSTRUCTOR,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  GET_TOTAL_PRICE,
} from '../actions/index'

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

const constructorInitialState = {
  bun: null,
  ingredients: [],
}

const orderInitialState = {
  order: null,
  isLoading: false,
  hasError: false,
}

const totalPriceInitialState = {
  sum: 0
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
        ingredients: [],
        isLoading: false,
        hasError: true,
      };
    default:
      return state
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
    default:
      return state;
  }
}

const constructorReducer = (state = constructorInitialState, action) => {
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

const orderReducer = (state = orderInitialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        order: action.order,
        isLoading: false,
      };
    case GET_ORDER_FAILED:
      return {
        order: null,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
}

const totalPriceReducer = (state = totalPriceInitialState, action) => {
  switch (action.type) {
    case GET_TOTAL_PRICE:
      const bunPrice = action.bun ? action.bun?.price * 2 : 0;
      const total = action.ingredients.reduce((acc, item) => acc + item.price, 0)
      return {
        ...state,
        sum: total + bunPrice,
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  targetIngredient: targetIngredientReducer,
  constructorIngredients: constructorReducer,
  order: orderReducer,
  totalPrice: totalPriceReducer,
})