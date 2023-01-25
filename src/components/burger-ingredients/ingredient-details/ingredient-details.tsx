import styles from "./ingredient-details.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "../../../services/hooks";
// types
import { TIngredient } from "../../../services/types/data";

export default function IngredientDetails() {
  // забираю id из урла
  const { id } = useParams<"id">();
  // забираю ингредиенты из стора
  const { ingredients } = useSelector((store) => store.ingredients);
  // нахожу нужный ингредиент
  const ingredient = ingredients?.find((i: TIngredient) => i._id === id);

  return (
    <article className={`${styles.wrap} ml-10 mr-10 mb-15`}>
      <div className={`${styles.image} mb-4`}>
        <img src={ingredient?.image_large} alt={ingredient?.name} />
      </div>
      <p className="text text_type_main-medium mb-8" data-cy="ingredient-name">{ingredient?.name}</p>
      <ul className={`${styles.list} text text_color_inactive`}>
        <li className={styles.list_item}>
          <span className="text_type_main-default">Калории,ккал</span>
          <span className="text_type_digits-default">
            {ingredient?.calories}
          </span>
        </li>
        <li className={styles.list_item}>
          <span className="text_type_main-default">Белки, г</span>
          <span className="text_type_digits-default">
            {ingredient?.proteins}
          </span>
        </li>
        <li className={styles.list_item}>
          <span className="text_type_main-default">Жиры, г</span>
          <span className="text_type_digits-default">{ingredient?.fat}</span>
        </li>
        <li className={styles.list_item}>
          <span className="text_type_main-default">Углеводы, г</span>
          <span className="text_type_digits-default">
            {ingredient?.carbohydrates}
          </span>
        </li>
      </ul>
    </article>
  );
}
