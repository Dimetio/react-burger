import styles from "./order.module.css";
import { TOrderProps } from "../../services/types/data";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../services/hooks";
import { useMemo } from "react";

export default function Order({
  item,
  showStatus = false,
}: TOrderProps): JSX.Element {
  const { ingredients } = useSelector((store) => store.ingredients);

  const items = item.ingredients
    .slice(0, 6)
    .map((ingredient) => ingredients.filter((i) => i._id === ingredient))
    .flat();
  const lastItem = items.pop();
  const quantity = item.ingredients.length - items.length - 1;

  const total = useMemo(() => {
    const order = item.ingredients
      .map((ingredient) => ingredients.filter((i) => i._id === ingredient))
      .flat();

    return order.reduce((sum, val) => sum + val.price, 0);
  }, [item.ingredients, ingredients]);

  return (
    <section>
      <div className={`${styles.info} mb-6`}>
        <span className="text text_type_digits-default">#{item.number}</span>
        <span className="text text_type_main-default text_color_inactive">
          {item.createdAt}
        </span>
      </div>

      <p className="text text_type_main-medium mb-2">{item.name}</p>

      {showStatus && (
        <div className={`${item.status === "done" && styles.done} mb-6`}>
          {item.status === "done"
            ? "Выполнен"
            : "pending"
            ? "Готовится"
            : "Отменен"}
        </div>
      )}

      <div className={styles.info}>
        <ul className={styles.order_preview}>
          {items.map((ingredient, index) => (
            <li className={styles.preview_item} key={index}>
              <img
                className={styles.preview_img}
                src={ingredient.image_mobile}
                alt={ingredient.name}
              />
            </li>
          ))}
          <li
            className={`${styles.preview_item} ${
              quantity !== 6 && styles.preview_item_last
            }`}
          >
            <img src={lastItem!.image_mobile} alt={lastItem!.name} />
            <span
              className={`${styles.more_items} text text_type_main-default`}
            >
              {quantity > 0 && `+${quantity}`}
            </span>
          </li>
        </ul>
        <span className={`${styles.price} text text_type_digits-default`}>
          {total} <CurrencyIcon type="primary" />
        </span>
      </div>
    </section>
  );
}
