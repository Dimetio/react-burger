import styles from "./feed.module.css";
import {
  commonConnect,
  commonDisconnect,
} from "../../services/actions/ws-common";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import { wsUrl } from "../../utils/api";
import { WebsocketStatus } from "../../services/types/ws";
import OrdersTablo from "../../components/orders-tablo/orders-tablo";
import Orders from "../../components/orders/orders";
import Preloader from "../../components/preloader/preloader";

export default function Feed(): JSX.Element {
  const { ONLINE } = WebsocketStatus;
  const dispatch = useDispatch();
  const { status, orders, total, totalToday } = useSelector(
    (store) => store.wsCommon
  );

  useEffect(() => {
    dispatch(commonConnect(wsUrl));

    return () => dispatch(commonDisconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {status === ONLINE ? (
        orders &&
        orders !== undefined &&
        orders.length !== 0 && (
          <div className={`${styles.page_container} pt-10 pl-4 pr-4`}>
            <div className={`${styles.column} pb-10`}>
              <section className="pb-2">
                <h2 className="text text_type_main-large mb-5">
                  Лента заказов
                </h2>
                <ul className={styles.ul}>
                  <Orders orders={orders} />
                </ul>
              </section>
            </div>
            <div className={`${styles.column} pl-5 pt-20 pb-10`}>
              <OrdersTablo
                orders={orders}
                total={total}
                totalToday={totalToday}
              />
            </div>
          </div>
        )
      ) : (
        <Preloader />
      )}
    </>
  );
}
