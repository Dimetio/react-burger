import React from 'react'
import styles from './ingredients-list.module.css'
import IngredientCard from './ingredient-card/ingredient-card';
import PropTypes from 'prop-types'
import ingredientPropTypes from '../../utils/prop-types';

const IngredientsList = React.forwardRef(({ title, ingredients, openModal }, ref) => {
  return (
    <article ref={ref}>
      <h2 className="text text_type_main-medium">{title}</h2>
      <ul className={`${styles.ingredients_list} pt-6 pl-4 pr-4 pb-10`}>
        {ingredients.map(item => (
          <li key={item._id}>
            <IngredientCard
              ingredient={item}
              openModal={openModal}
            />
          </li>
        ))}
      </ul>
    </article>
  )
})

ingredientPropTypes.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropTypes()).isRequired,
  openModal: PropTypes.func.isRequired,
}


export default IngredientsList