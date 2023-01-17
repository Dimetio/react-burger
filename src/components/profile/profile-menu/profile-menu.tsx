import styles from "./profile-menu.module.css";
import { NavLink } from "react-router-dom";
import { logoutAction } from "../../../services/actions";
import { useDispatch } from "../../../services/hooks";

export default function ProfileMenu() {
  const dispatch = useDispatch();
  const activeClassName = styles.nav_item_active;

  function onExit() {
    dispatch(logoutAction());
  }

  return (
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
  );
}
