import { useCallback } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import BurgerIngredientsItem from "./burger-ingredients-item/burger-ingredients-item";
import { updateIngredientConstructor } from "../../services/actions";

export default function BurgerIngredientsList(): JSX.Element {
  const { ingredients } = useSelector((store) => store.constructorIngredients);
  const dispatch = useDispatch();

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      dispatch(updateIngredientConstructor(dragIndex, hoverIndex));
    },
    [ingredients, dispatch]
  );

  return (
    <>
      {ingredients.map((item, index) => (
        <li key={item._dndid}>
          <BurgerIngredientsItem
            item={item}
            index={index}
            moveCard={moveCard}
          />
        </li>
      ))}
    </>
  );
}
