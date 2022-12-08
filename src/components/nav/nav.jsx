import { useDispatch } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { logoutAction } from '../../services/actions'
import styles from './nav.module.css'

export default function Nav() {
  const activeClassName = styles.nav_item_active
  const dispatch = useDispatch()

  function onExit() {
    dispatch(logoutAction())
  }

  return (
    <section className={styles.section}>
      <nav className={styles.nav}>
        <NavLink
          to='/profile'
          className={({ isActive }) => `${styles.nav_item} text text_type_main-medium` + (isActive ? ` ${activeClassName}` : '')}
          exact={true}
        >
          Профиль
        </NavLink>
        <NavLink
          to='/profile/orders'
          className={({ isActive }) => `${styles.nav_item} text text_type_main-medium` + (isActive ? ` ${activeClassName}` : '')}
        >
          История заказов
        </NavLink>

        <div
          onClick={onExit}
          className={`${styles.nav_item} text text_type_main-medium`}
        >Выход</div>

        <p className={`${styles.nav_text} text text_type_main-default mt-20`}> В этом разделе вы можете изменить свои персональные данные</p>
      </nav>

      <Outlet />
    </section>
  )
}
