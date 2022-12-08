import {
  v1 as random
} from 'uuid';

export const ADD_INGREDIENT_CONSTRUCTOR = 'ADD_INGREDIENT_CONSTRUCTOR';
export const DELETE_INGREDIENT_CONSTRUCTOR = 'DELETE_INGREDIENT_CONSTRUCTOR';
export const UPDATE_INGREDIENT_CONSTRUCTOR = 'UPDATE_INGREDIENT_CONSTRUCTOR';
export const CLEAR_INGREDIENT_CONSTRUCTOR = 'CLEAR_INGREDIENT_CONSTRUCTOR';
export const ADD_BUNS_CONSTRUCTOR = 'ADD_BUNS_CONSTRUCTOR';

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