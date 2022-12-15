import React from "react";
import styles from "./ingredients-list.module.css";
import IngredientCard from "./ingredient-card/ingredient-card";
import PropTypes from "prop-types";
import ingredientPropTypes from "../../utils/prop-types";
import { Link, useLocation } from "react-router-dom";

import { TIngredientList, TIngredient } from "../../utils/types";

const IngredientsList = React.forwardRef<HTMLDivElement, TIngredientList>(
  ({ title, ingredients }, ref) => {
    const location = useLocation();
    return (
      <div ref={ref}>
        <h2 className="text text_type_main-medium">{title}</h2>
        <ul className={`${styles.ingredients_list} pt-6 pl-4 pr-4 pb-10`}>
          {ingredients.map((item: TIngredient) => (
            <li key={item._id}>
              <Link
                className={styles.link}
                to={`ingredients/${item._id}`}
                state={{ background: location }}
              >
                <IngredientCard ingredient={item} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

// ingredientPropTypes.propTypes = {
//   title: PropTypes.string.isRequired,
//   ingredients: PropTypes.arrayOf(ingredientPropTypes()).isRequired,
// };

export default IngredientsList;
