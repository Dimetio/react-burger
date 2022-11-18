import React, { useMemo } from 'react'
import styles from './ingredient-card.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import ingredientPropTypes from '../../utils/prop-types';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';

export default function IngredientCard({ ingredient, openModal }) {
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
  })

  const { ingredients, bun } = useSelector(store => store.constructorIngredients)

  const counter = useMemo(() => {
    return ingredient.type !== 'bun'
      ? ingredients.filter((item) => item._id === ingredient._id).length
      : bun?._id === ingredient._id
        ? 2
        : 0
  }, [ingredient.type, ingredient._id, ingredients, bun?._id])

  return (
    <div
      ref={dragRef}
      className={`${styles.ingredient} pt-6`}
      onClick={() => openModal(ingredient)}
    >
      <div className={styles.image}>
        {counter !== 0 && (
          <Counter count={counter} size="default" />
        )}
        <img
          className="pr-4 pl-4 pb-1"
          src={ingredient.image}
          alt={ingredient.name}
        />
      </div>

      <div className={`${styles.price} pb-1`}>
        <p className="text text_type_digits-default pr-2">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>

      <p className={`${styles.name} text text_type_main-default`}>
        {ingredient.name}
      </p>
    </div>
  )
}

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes().isRequired,
  openModal: PropTypes.func.isRequired,
}