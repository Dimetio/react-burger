import styles from './page.module.css'
import { NavLink } from 'react-router-dom'
import { Input, PasswordInput, EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';

export default function Profile() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  })

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <section className={styles.section_profile}>
      <div className={styles.nav}>
        <NavLink
          to='/profile'
          className={`${styles.nav_item} text text_type_main-medium`}
          activeClassName={styles.nav_item_active}
        >
          Профиль
        </NavLink>
        <NavLink
          to='/profile/orders'
          className={`${styles.nav_item} text text_type_main-medium`}
          activeClassName={styles.nav_item_active}
        >
          История заказов
        </NavLink>

        <div className={`${styles.nav_item} text text_type_main-medium`}>Выход</div>

        <p className={`${styles.nav_text} text text_type_main-default mt-20`}> В этом разделе вы можете изменить свои персональные данные</p>
      </div>

      <form className={styles.form}>
        <div className={'mb-6'}>
          <Input
            placeholder="Имя"
            value={values.name || ''}
            name="name"
            onChange={onChange}
            icon={"EditIcon"}
          />
        </div>
        <div className={'mb-6'}>
          <EmailInput
            value={values.email || ''}
            name="email"
            onChange={onChange}
            isIcon={true}
          />
        </div>
        <div className={'mb-6'}>
          <PasswordInput
            value={values.password || ''}
            name={"password"}
            onChange={onChange}
            icon="EditIcon"
          />
        </div>

        <div className={styles.buttons}>
          <Button htmlType="button" type="secondary">
            Отмена
          </Button>
          <Button htmlType="button" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      </form>
    </section>
  )
}
