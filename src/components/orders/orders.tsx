import styles from "./orders.module.css";
import Order from "../order/order";
import { useSelector } from "../../services/hooks";

export default function Orders() {
  const { orders } = useSelector((store) => store.wsProfile);
  return (
    <ul className={`${styles.ul}`}>
      {orders?.reverse().map((item) => (
        <li className={styles.order} key={item._id}>
          <Order item={item} showStatus={true} />
        </li>
      ))}
    </ul>
  );
}
