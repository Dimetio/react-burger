import React from "react";
import styles from "./ingredients-list.module.css";
import IngredientCard from "./ingredient-card/ingredient-card";
import { Link, useLocation } from "react-router-dom";

import { TIngredientListProps, TIngredient } from "../../services/types/data";

const IngredientsList = React.forwardRef<HTMLDivElement, TIngredientListProps>(
  ({ title, ingredients }, ref) => {
    const location = useLocation();
    return (
      <div ref={ref} data-cy={title}>
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

export default IngredientsList;
