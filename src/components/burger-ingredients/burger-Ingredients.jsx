import React from 'react'
import PropTypes from 'prop-types';
import styles from './burger-Ingredients.module.css'
import IngredientsList from './ingredients-list/ingredients-list'
import Tabs from './tabs/tabs'

const BurgerIngredientsPropTypes = PropTypes.shape({
  _id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
})

BurgerIngredients.prototype = {
  daingredientsa: BurgerIngredientsPropTypes,
}

export default function BurgerIngredients({ ingredients }) {

  return (
    <section className={`${styles.ingredients} mr-10`}>
      <p className="text text_type_main-large pt-10 pb-5">
        Соберите бургер
      </p>

      <Tabs />
      <IngredientsList ingredients={ingredients} />

    </section>
  )
}
