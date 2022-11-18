import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import BurgerIngredientsItem from '../burger-ingredients-item/burger-ingredients-item';
import { updateIngredientConstructor } from '../../services/actions';
import ingredientPropTypes from '../../utils/prop-types'
import PropTypes from 'prop-types'

export default function BurgerIngredientsList({ ingredients }) {
  const dispatch = useDispatch();

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = ingredients[dragIndex];
      const newCards = [...ingredients];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, dragCard);

      dispatch(updateIngredientConstructor(newCards));
    },
    [ingredients, dispatch],
  );

  return (
    ingredients.map((item, index) => (
      <li key={item._dndid}>
        <BurgerIngredientsItem
          index={index}
          item={item}
          moveCard={moveCard}
        />
      </li>
    ))
  )
}

BurgerIngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes()).isRequired,
}