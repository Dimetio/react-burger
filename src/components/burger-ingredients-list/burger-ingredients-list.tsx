import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import BurgerIngredientsItem from "./burger-ingredients-item/burger-ingredients-item";
import { updateIngredientConstructor } from "../../services/actions";

import { TConstructorIngredient } from "../../utils/types";

export default function BurgerIngredientsList(): JSX.Element {
  // TODO fix any type
  const { ingredients } = useSelector(
    (store: any) => store.constructorIngredients
  );
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
