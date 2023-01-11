import { useDispatch, useSelector } from "../../services/hooks";
import { Route, Routes } from "react-router-dom";
import styles from "./profile.module.css";
import { WebsocketStatus } from "../../services/types/ws";
import {
  profileConnect,
  profileDisconnect,
} from "../../services/actions/ws-profile";
import { useEffect } from "react";
import { wsAuthUrl } from "../../utils/api";
import { getCookie } from "../../utils/cookie";
import ProfileMenu from "../../components/profile/profile-menu/profile-menu";
import Preloader from "../../components/preloader/preloader";
import Profile from "../../components/profile/profile-form/profileForm";
import Orders from "../../components/orders/orders";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { ONLINE, CONNECTING } = WebsocketStatus;
  const { status, orders } = useSelector((store) => store.wsProfile);

  useEffect(() => {
    const token = getCookie("accessToken");
    dispatch(profileConnect(`${wsAuthUrl}?token=${token}`));

    return () => dispatch(profileDisconnect());
  }, []);

  return (
    <section className={styles.section_profile}>
      <div className={styles.column}>
        <ProfileMenu />
      </div>
      <div className={styles.column}>
        <Routes>
          <Route index element={<Profile />} />

          <Route
            path="orders"
            element={
              status === ONLINE ? (
                orders &&
                orders !== undefined &&
                orders.length !== 0 && <Orders orders={orders} />
              ) : (
                <Preloader />
              )
            }
          />
        </Routes>
      </div>
    </section>
  );
}
