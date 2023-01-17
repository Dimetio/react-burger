import { Route, Routes } from "react-router-dom";
import styles from "./profile.module.css";
import ProfileMenu from "../../components/profile/profile-menu/profile-menu";
import Profile from "../../components/profile/profile-form/profileForm";
import ProfileOrders from "../../components/profile/profile-orders/profile-orders";

export default function ProfilePage() {
  return (
    <section className={styles.section_profile}>
      <div className={styles.column}>
        <ProfileMenu />
      </div>
      <div className={styles.column}>
        <Routes>
          <Route index element={<Profile />} />

          <Route path="orders" element={<ProfileOrders />} />
        </Routes>
      </div>
    </section>
  );
}
