import React from 'react'
import styles from './ingredients-list.module.css'
import IngredientCard from './ingredient-card/ingredient-card';
import PropTypes from 'prop-types'
import ingredientPropTypes from '../../utils/prop-types';
import { Link, useLocation } from 'react-router-dom';

const IngredientsList = React.forwardRef(({ title, ingredients, openModal }, ref) => {
  const location = useLocation()
  return (
    <article ref={ref}>
      <h2 className="text text_type_main-medium">{title}</h2>
      <ul className={`${styles.ingredients_list} pt-6 pl-4 pr-4 pb-10`}>
        {ingredients.map(item => (
          <li key={item._id}>
            <Link
              className={styles.link}
              to={`ingredients/${item._id}`}
              state={{ background: location }}
            >
              <IngredientCard
                ingredient={item}
                openModal={openModal}
              />
            </Link>

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