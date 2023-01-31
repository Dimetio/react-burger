import { WebsocketStatus } from "../../../services/types/ws";
import {
  profileConnect,
  profileDisconnect,
} from "../../../services/actions/ws-profile";
import { useEffect } from "react";
import { wsAuthUrl } from "../../../utils/api";
import { getCookie } from "../../../utils/cookie";
import { useDispatch, useSelector } from "../../../services/hooks";
import Orders from "../../orders/orders";
import Preloader from "../../preloader/preloader";

export default function ProfileOrders(): JSX.Element {
  const dispatch = useDispatch();
  const { ONLINE } = WebsocketStatus;
  const { status, orders } = useSelector((store) => store.wsProfile);

  useEffect(() => {
    const token = getCookie("accessToken");
    dispatch(profileConnect(`${wsAuthUrl}?token=${token}`));

    return () => dispatch(profileDisconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {status === ONLINE ? (
        orders &&
        orders !== undefined &&
        orders.length !== 0 && <Orders orders={orders} />
      ) : (
        <Preloader />
      )}
    </>
  );
}
