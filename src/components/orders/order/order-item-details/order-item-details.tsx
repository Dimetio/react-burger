import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../../../services/hooks";
import styles from "./order-item-details.module.css";
import { getOrderItem } from "../../../../services/actions/order-item";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function OrderItemDetails(): JSX.Element {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store.orderItemReducer);
  const { number } = useParams<"number">();
  const { ingredients } = useSelector((store) => store.ingredients);

  // ищу уникальные id и получаю данные из массива ingredients
  const uniqueIngredients = Array.from(new Set(order?.ingredients));
  const uniqueIngredientsData = uniqueIngredients
    .map((id) => ingredients.filter((i) => i._id === id))
    .flat();

  // получаю данные всех ингредиентов, чтобы получить сумму
  const ingredientsData = order?.ingredients
    .map((id) => ingredients.filter((i) => i._id === id))
    .flat();

  // считаю сумму
  const total = ingredientsData?.reduce((sum, val) => sum + val.price, 0);

  const count: { [key: string]: number } = {};

  if (order) {
    for (let ingredient of order.ingredients) {
      if (count[ingredient]) {
        count[ingredient]++;
      } else {
        count[ingredient] = 1;
      }
    }
  }

  useEffect(() => {
    if (number) {
      dispatch(getOrderItem(number));
    }
  }, [number]);

  return (
    <>
      {order && (
        <div className={styles.order}>
          <p className={`${styles.number} text text_type_digits-default mb-10`}>
            {`#${order.number}`}
          </p>

          <p className="text text_type_main-medium mb-3">{order.name}</p>

          <div
            className={`${
              order.status === "done" && styles.done
            } text text_type_main-default mb-15`}
          >
            {order.status === "done"
              ? "Выполнен"
              : "pending"
              ? "Готовится"
              : "Отменен"}
          </div>

          <p className="text text_type_main-medium mb-6">Состав:</p>

          <div className={`${styles.column} mb-10`}>
            <ul className={styles.list}>
              {uniqueIngredientsData?.map((el) => (
                <li className={`${styles.item} mb-4`} key={el._id}>
                  <div className={styles.wrap}>
                    <div className={styles.img_wrap}>
                      <img
                        className={styles.img}
                        src={el.image_mobile}
                        alt={el.name}
                      />
                    </div>
                    <span
                      className={`${styles.name} text text_type_main-default`}
                    >
                      {el.name}
                    </span>
                  </div>

                  <span
                    className={`${styles.price} text text_type_digits-default`}
                  >
                    {count[el._id]} x {el.price}
                    <CurrencyIcon type="primary" />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.info}`}>
            <span className="text text_type_main-default text_color_inactive">
              {order.createdAt}
            </span>
            <span className={`${styles.price} text text_type_digits-default`}>
              {total} <CurrencyIcon type="primary" />
            </span>
          </div>
        </div>
      )}
    </>
  );
}
