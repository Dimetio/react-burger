import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
import { NavLink } from 'react-router-dom'

export default function AppHeader() {
  return (
    <header>
      <nav className={`${styles.nav} px-4`}>
        <ul className={styles.ul}>
          <NavLink to='/' className={`${styles.item} p-5 mr-2`} activeClassName={styles.item_active}>
            <BurgerIcon type="primary" />
            <p className='text text_type_main-default ml-2'>Конструктор</p>
          </NavLink>
          <NavLink to='/orders' className={`${styles.item} p-5`} activeClassName={styles.item_active}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default ml-2">Лента заказов</p>
          </NavLink>
        </ul>
        <Logo />

        <NavLink to='/profile' className={`${styles.item} p-5`} activeClassName={styles.item_active}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default ml-2">Личный кабинет</p>
        </NavLink>
      </nav>
    </header>
  )
}
