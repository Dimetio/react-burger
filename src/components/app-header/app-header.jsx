import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function AppHeader() {
  const { pathname } = useLocation()
  const activeClassName = styles.item_active
  return (
    <header>
      <nav className={`${styles.nav} px-4`}>
        <ul className={styles.ul}>
          <NavLink
            to='/'
            className={({ isActive }) => `${styles.item} p-5 mr-2` + (isActive ? ` ${activeClassName}` : '')}
          >
            <BurgerIcon type={pathname === '/' ? "primary" : "secondary"} />
            <p className='text text_type_main-default ml-2'>Конструктор</p>
          </NavLink>
          <NavLink
            to='/orders'
            className={({ isActive }) => `${styles.item} p-5` + (isActive ? ` ${activeClassName}` : '')}
          >
            <ListIcon type={pathname === '/orders' ? "primary" : "secondary"} />
            <p className="text text_type_main-default ml-2">Лента заказов</p>
          </NavLink>
        </ul>

        <Link to={'/'}>
          <Logo />
        </Link>


        <NavLink
          to='/profile'
          className={({ isActive }) => `${styles.item} p-5` + (isActive ? ` ${activeClassName}` : '')}
        >
          <ProfileIcon type={pathname === '/profile' ? "primary" : "secondary"} />
          <p className="text text_type_main-default ml-2">Личный кабинет</p>
        </NavLink>
      </nav>
    </header>
  )
}
