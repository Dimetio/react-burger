import React from 'react'
import styles from './ingredient-card.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import ingredientPropTypes from '../../utils/prop-types';

export default function IngredientCard({ ingredient, count = 0, openModal }) {
  return (
    <li
      className={`${styles.ingredient} pt-6`}
      onClick={() => openModal(ingredient)}
    >
      <div className={styles.image}>
        {count !== 0 && (
          <Counter count={count} size="default" />
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
    </li>
  )
}

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes(),
  count: PropTypes.number,
  openModal: PropTypes.func.isRequired,
}