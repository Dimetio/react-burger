import IngredientDetails from "../components/burger-ingredients/ingredient-details/ingredient-details";
import styles from "./page.module.css";

export default function TargetIngredient() {
  return (
    <section className={`${styles.section_ingredient}`}>
      <h1 className="text text_type_main-large mb-6">Детали ингредиента</h1>
      <IngredientDetails />
    </section>
  );
}
