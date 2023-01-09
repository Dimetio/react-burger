import styles from "./orders-tablo.module.css";
import { TOrdersTablo } from "../../services/types/data";

export default function OrderTablo({
  orders,
  total,
  totalToday,
}: TOrdersTablo): JSX.Element {
  const done = orders
    .filter((item) => item.status === "done")
    .map((item) => item.number)
    .slice(0, 5);

  const pending = orders
    .filter((item) => item.status === "pending")
    .map((item) => item.number)
    .slice(0, 5);

  return (
    <>
      <section className={`${styles.status} pb-15`}>
        <div className={`${styles.status_column} mr-9`}>
          <p className="text text_type_main-medium mb-6">Готовы:</p>
          <ul className={styles.status_column_inner}>
            {done.map((number, index) => (
              <li
                className={`${styles.number} text text_type_digits-default mb-2`}
                key={index}
              >
                {number}
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.status_column}`}>
          <p className="text text_type_main-medium mb-6">В работе:</p>
          <ul className={styles.status_column_inner}>
            {pending.map((number, index) => (
              <li className="text text_type_digits-default mb-2" key={index}>
                {number}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="pb-15">
        <p className="text text_type_main-medium mb-6">
          Выполнено за все время:
        </p>
        <div className="text text_type_digits-large">{total}</div>
      </section>
      <section>
        <p className="text text_type_main-medium mb-6">Выполнено за сегодня:</p>
        <div className="text text_type_digits-large">{totalToday}</div>
      </section>
    </>
  );
}
