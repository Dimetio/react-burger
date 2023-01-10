import Order from "../../order/order";
import styles from "./profile-orders.module.css";
import { TProfileOrders } from "../../../services/types/data";

export default function ProfileOrders({ orders }: TProfileOrders): JSX.Element {
  return (
    <section className="pb-2">
      <div className={styles.column}>
        <ul className={`${styles.ul}`}>
          {orders?.reverse().map((item) => (
            <li className={styles.order} key={item._id}>
              <Order item={item} showStatus={true} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
