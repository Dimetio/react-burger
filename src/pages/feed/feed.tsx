import styles from "./feed.module.css";
import {
  commonConnect,
  commonDisconnect,
} from "../../services/actions/ws-common";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import { wsUrl } from "../../utils/api";
import { WebsocketStatus } from "../../services/types/ws";
import Order from "../../components/order/order";

export default function Feed(): JSX.Element {
  const { CONNECTING, ONLINE } = WebsocketStatus;
  const dispatch = useDispatch();
  const { status, orders, total, totalToday } = useSelector(
    (store) => store.wsCommon
  );

  useEffect(() => {
    dispatch(commonConnect(wsUrl));

    return () => dispatch(commonDisconnect());
  }, []);
  return (
    <>
      {status === ONLINE ? (
        <div className={`${styles.page_container} pt-10 pl-4 pr-4`}>
          <div className={`${styles.column} pb-10`}>
            <section className="pb-2">
              <h2 className="text text_type_main-large mb-5">Лента заказов</h2>
              <ul className={styles.ul}>
                {orders?.map((item) => (
                  <li key={item._id} className={styles.li}>
                    <Order item={item} />
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div className={`${styles.column} pl-5 pt-20 pb-10`}></div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
