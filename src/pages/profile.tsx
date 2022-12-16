import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { logoutAction } from "../services/actions";
import styles from "./page.module.css";

export default function ProfilePage() {
  const activeClassName = styles.nav_item_active;
  const dispatch = useDispatch();

  function onExit() {
    dispatch<any>(logoutAction());
  }

  return (
    <section className={styles.section_profile}>
      <nav className={styles.nav}>
        <NavLink
          to=""
          end
          className={({ isActive }) =>
            `${styles.nav_item} text text_type_main-medium` +
            (isActive ? ` ${activeClassName}` : "")
          }
        >
          Профиль
        </NavLink>
        <NavLink
          to="orders"
          end
          className={({ isActive }) =>
            `${styles.nav_item} text text_type_main-medium` +
            (isActive ? ` ${activeClassName}` : "")
          }
        >
          История заказов
        </NavLink>

        <div
          onClick={onExit}
          className={`${styles.nav_item} text text_type_main-medium`}
        >
          Выход
        </div>

        <p className={`${styles.nav_text} text text_type_main-default mt-20`}>
          {" "}
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>

      <Outlet />
    </section>
  );
}
