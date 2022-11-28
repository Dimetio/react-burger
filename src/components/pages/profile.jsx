import styles from './page.module.css'
import { NavLink } from 'react-router-dom'
import { Input, PasswordInput, EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { logout } from '../../services/actions/auth';
import { useDispatch, useSelector } from 'react-redux';

export default function Profile() {
  const dispatch = useDispatch();
  const [values, setValues] = useState({})

  const token = useSelector(store => store.auth.refreshToken)
  const user = useSelector(store => store.auth.user)
  console.log(token)

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  function onExit() {
    dispatch(logout(token))
  }

  useEffect(() => {
    setValues(user)
  }, [])

  return (
    <section className={styles.section_profile}>
      <div className={styles.nav}>
        <NavLink
          to='/profile'
          className={`${styles.nav_item} text text_type_main-medium`}
        >
          Профиль
        </NavLink>
        <NavLink
          to='/profile/orders'
          className={`${styles.nav_item} text text_type_main-medium`}
        >
          История заказов
        </NavLink>

        <div
          onClick={onExit}
          className={`${styles.nav_item} text text_type_main-medium`}
        >Выход</div>

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
