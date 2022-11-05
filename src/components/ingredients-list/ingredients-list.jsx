import React from 'react'
import styles from './ingredients-list.module.css'
import IngredientCard from '../ingredient-card/ingredient-card';
import PropTypes from 'prop-types'
import ingredientPropTypes from '../../utils/prop-types';

export default function IngredientsList({ title, ingredients, openModal }) {
  return (
    <article>
      <h2 className="text text_type_main-medium">{title}</h2>
      <ul className={`${styles.ingredients_list} pt-6 pl-4 pr-4 pb-10`}>
        {ingredients.map(item => (
          <IngredientCard
            ingredient={item}
            key={item._id}
            openModal={openModal}
          />
        ))}
      </ul>
    </article>
  )
}

ingredientPropTypes.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropTypes()).isRequired,
  openModal: PropTypes.func.isRequired,
}
