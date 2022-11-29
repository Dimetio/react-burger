export const GET_TARGET_INGREDIENT = 'GET_TARGET_INGREDIENT';
export const DELETE_TARGET_INGREDIENT = 'DELETE_TARGET_INGREDIENT';

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