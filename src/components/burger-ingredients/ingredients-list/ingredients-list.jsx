import React from 'react'
import styles from './ingredients-list.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'

export default function IngredientsList({ ingredients }) {
  return (
    <>
      <article>
        <p className="text text_type_main-medium">Булки</p>
        <ul className={`${styles.ingredients_list} pt-6 pl-4 pr-4 pb-10`}>
          <li className={`${styles.ingredient} pt-6`}>
            <div className={styles.image}>
              <Counter count={1} size="default" />
              <img
                className="pr-4 pl-4 pb-1"
                src={ingredients[0].image}
                alt={ingredients[0].name}
              />
            </div>

            <div className={`${styles.price} pb-1`}>
              <p className="text text_type_digits-default pr-2">{ingredients[0].price}</p>
              <CurrencyIcon type="primary" />
            </div>

            <p className={`${styles.name} text text_type_main-default`}>
              {ingredients[0].name}
            </p>
          </li>

          <li className={`${styles.ingredient} pt-6`}>
            <img
              className={`${styles.image} pr-4 pl-4 pb-1`}
              src={ingredients[1].image}
              alt={ingredients[1].name}
            />
            <div className={`${styles.price} pb-1`}>
              <p className="text text_type_digits-default pr-2">{ingredients[1].price}</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.name} text text_type_main-default`}>
              {ingredients[1].name}
            </p>
          </li>
        </ul>
      </article>

      <article>
        <p className="text text_type_main-medium">Соусы</p>
        <ul className={`${styles.ingredients_list} pt-6 pl-4 pr-4 pb-10`}>
          <li className={`${styles.ingredient} pt-6`}>
            <div className={styles.image}>
              <Counter count={1} size="default" />
              <img
                className="pr-4 pl-4 pb-1"
                src={ingredients[0].image}
                alt={ingredients[0].name}
              />
            </div>

            <div className={`${styles.price} pb-1`}>
              <p className="text text_type_digits-default pr-2">{ingredients[0].price}</p>
              <CurrencyIcon type="primary" />
            </div>

            <p className={`${styles.name} text text_type_main-default`}>
              {ingredients[0].name}
            </p>
          </li>

          <li className={`${styles.ingredient} pt-6`}>
            <img
              className={`${styles.image} pr-4 pl-4 pb-1`}
              src={ingredients[1].image}
              alt={ingredients[1].name}
            />
            <div className={`${styles.price} pb-1`}>
              <p className="text text_type_digits-default pr-2">{ingredients[1].price}</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.name} text text_type_main-default`}>
              {ingredients[1].name}
            </p>
          </li>

          <li className={`${styles.ingredient} pt-6`}>
            <img
              className={`${styles.image} pr-4 pl-4 pb-1`}
              src={ingredients[1].image}
              alt={ingredients[1].name}
            />
            <div className={`${styles.price} pb-1`}>
              <p className="text text_type_digits-default pr-2">{ingredients[1].price}</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.name} text text_type_main-default`}>
              {ingredients[1].name}
            </p>
          </li>

          <li className={`${styles.ingredient} pt-6`}>
            <img
              className={`${styles.image} pr-4 pl-4 pb-1`}
              src={ingredients[1].image}
              alt={ingredients[1].name}
            />
            <div className={`${styles.price} pb-1`}>
              <p className="text text_type_digits-default pr-2">{ingredients[1].price}</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.name} text text_type_main-default`}>
              {ingredients[1].name}
            </p>
          </li>
        </ul>
      </article>
    </>
  )
}
