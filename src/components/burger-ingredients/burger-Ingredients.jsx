import React from 'react'
import styles from './burger-Ingredients.module.css'
import IngredientsList from '../ingredients-list/ingredients-list'
import Tabs from '../tabs/tabs'
import PropTypes from 'prop-types';
import ingredientPropTypes from '../../utils/prop-types';

export default function BurgerIngredients({ ingredients }) {
  const buns = ingredients.filter(item => item.type === 'bun')
  const mains = ingredients.filter(item => item.type === 'main')
  const sauces = ingredients.filter(item => item.type === 'sauce')

  return (
    <section className={`${styles.section} mr-10 pt-10 pb-10`}>
      <p className="text text_type_main-large pb-5">
        Соберите бургер
      </p>

      <Tabs />

      <div className={styles.ingredients}>
        <IngredientsList title="Булки" ingredients={buns} />
        <IngredientsList title="Соусы" ingredients={sauces} />
        <IngredientsList title="Начинки" ingredients={mains} />
      </div>

    </section>
  )
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes()).isRequired
}