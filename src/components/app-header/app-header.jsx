import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'

export default function AppHeader() {
  return (
    <header>
      <nav className={`${styles.nav} px-4`}>
        <ul className={styles.ul}>
          <li className={`${styles.li} p-5 mr-2`}>
            <BurgerIcon type="primary" />
            <p className={`${styles.li_active} text text_type_main-default ml-2`}>Конструктор</p>
          </li>
          <li className={`${styles.li} p-5`}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default ml-2">Лента заказов</p>
          </li>
        </ul>
        <Logo />

        <div className={`${styles.profile} p-5`}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default ml-2">Личный кабинет</p>
        </div>
      </nav>
    </header>
  )
}
