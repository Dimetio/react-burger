import { useCallback } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import BurgerIngredientsItem from "./burger-ingredients-item/burger-ingredients-item";
import { updateIngredientConstructor } from "../../services/actions";

import { TConstructorIngredient } from "../../utils/types";

export default function BurgerIngredientsList(): JSX.Element {
  const { ingredients } = useSelector((store) => store.constructorIngredients);
  const dispatch = useDispatch();

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = ingredients[dragIndex];
      const newCards = [...ingredients];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, dragCard);

      dispatch(updateIngredientConstructor(newCards));
    },
    [ingredients, dispatch]
  );

  return ingredients.map((item: TConstructorIngredient, index: number) => (
    <li key={item._dndid}>
      <BurgerIngredientsItem item={item} index={index} moveCard={moveCard} />
    </li>
  ));
}
