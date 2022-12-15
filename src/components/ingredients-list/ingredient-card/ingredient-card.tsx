import { useMemo, FC } from "react";
import styles from "./ingredient-card.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientPropTypes from "../../../utils/prop-types";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

import { TIngredient } from "../../../utils/types";

const IngredientCard: FC<{ ingredient: TIngredient }> = ({ ingredient }) => {
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
  });

  // TODO fix any type
  const { ingredients, bun } = useSelector(
    (store: any) => store.constructorIngredients
  );

  const counter: number = useMemo(() => {
    return ingredient.type !== "bun"
      ? ingredients.filter(
          (item: { id: string; _id: string }) => item._id === ingredient._id
        ).length
      : bun?._id === ingredient._id
      ? 2
      : 0;
  }, [ingredients, bun]);

  return (
    <div ref={dragRef} className={`${styles.ingredient} pt-6`}>
      <div className={styles.image}>
        {counter !== 0 && <Counter count={counter} size="default" />}
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
    </div>
  );
};

// IngredientCard.propTypes = {
//   ingredient: ingredientPropTypes().isRequired,
// };

export default IngredientCard;
