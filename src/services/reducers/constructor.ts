import {
  ADD_INGREDIENT_CONSTRUCTOR,
  DELETE_INGREDIENT_CONSTRUCTOR,
  UPDATE_INGREDIENT_CONSTRUCTOR,
  CLEAR_INGREDIENT_CONSTRUCTOR,
  ADD_BUNS_CONSTRUCTOR,
} from "../constants/constructor";

import { TIngredient, TConstructorIngredient } from "../types/data";

import type { TConstructorActions } from "../actions/constructor";

type TInitialState = {
  bun: TIngredient | null;
  ingredients: TConstructorIngredient[];
};

const initialState: TInitialState = {
  bun: null,
  ingredients: [],
};

export default function constructorReducer(
  state: TInitialState = initialState,
  action: TConstructorActions
) {
  switch (action.type) {
    case ADD_INGREDIENT_CONSTRUCTOR:
      return {
        ...state,
        ingredients: [...state.ingredients, action.data],
      };
    case DELETE_INGREDIENT_CONSTRUCTOR:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item._dndid !== action.data._dndid
        ),
      };
    case UPDATE_INGREDIENT_CONSTRUCTOR:
      const { dragIndex, hoverIndex } = action.payload;
      const dragCard = state.ingredients[dragIndex];
      const newCards = [...state.ingredients];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, dragCard);
      return {
        ...state,
        ingredients: newCards,
      };
    case CLEAR_INGREDIENT_CONSTRUCTOR:
      return {
        ...state,
        bun: null,
        ingredients: [] as TConstructorIngredient[],
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
