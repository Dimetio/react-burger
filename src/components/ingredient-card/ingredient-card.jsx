import React from 'react'
import styles from './ingredient-card.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'


export default function IngredientCard({ ingredients, count = 0 }) {
  return (
    <li className={`${styles.ingredient} pt-6`}>
      <div className={styles.image}>
        {count !== 0 && (
          <Counter count={count} size="default" />
        )}
        <img
          className="pr-4 pl-4 pb-1"
          src={ingredients.image}
          alt={ingredients.name}
        />
      </div>

      <div className={`${styles.price} pb-1`}>
        <p className="text text_type_digits-default pr-2">{ingredients.price}</p>
        <CurrencyIcon type="primary" />
      </div>

      <p className={`${styles.name} text text_type_main-default`}>
        {ingredients.name}
      </p>
    </li>
  )
}
