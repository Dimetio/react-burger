import styles from "./orders.module.css";
import Order from "./order/order";
import { TOrders } from "../../services/types/data";
import { Link, useLocation } from "react-router-dom";

export default function Orders({ orders }: TOrders) {
  const location = useLocation();
  return (
    <ul className={`${styles.ul}`}>
      {orders
        ?.slice(0)
        .reverse()
        .map((item) => (
          <li className={styles.order} key={item._id}>
            <Link
              className={styles.link}
              to={`${location.pathname}/${item.number}`}
              state={{ background: location }}
            >
              <Order item={item} showStatus={true} />
            </Link>
          </li>
        ))}
    </ul>
  );
}
