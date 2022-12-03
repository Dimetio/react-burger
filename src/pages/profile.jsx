import styles from './page.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import { Input, PasswordInput, EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { logoutAction, getUserAction, updateUserAction } from '../services/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../hook/useForm'

export default function Profile() {
  const { pathname } = useLocation()
  const activeClassName = styles.nav_item_active
  const dispatch = useDispatch();
  const { values, handleChange, setValues } = useForm({ name: '', email: '', password: '' });
  const [defaultValues, setDefaultValues] = useState({})

  const user = useSelector(store => store.auth.user)

  function onExit() {
    dispatch(logoutAction())
  }

  function handleResetValues(e) {
    e.preventDefault();
    setValues(defaultValues)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(updateUserAction(values))
  }

  useEffect(() => {
    setDefaultValues(user);
    setValues(user)
  }, [setValues, user])

  useEffect(() => {
    dispatch(getUserAction())
  }, [dispatch])

  return (
    <section className={styles.section_profile}>
      <div className={styles.nav}>
        <NavLink
          to='/profile'
          className={({ isActive }) => `${styles.nav_item} text text_type_main-medium` + (isActive ? ` ${activeClassName}` : '')}
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
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={'mb-6'}>
          <Input
            placeholder="Имя"
            value={values.name || ''}
            name="name"
            onChange={handleChange}
            icon={"EditIcon"}
          />
        </div>
        <div className={'mb-6'}>
          <EmailInput
            value={values.email || ''}
            name="email"
            onChange={handleChange}
            isIcon={true}
          />
        </div>
        <div className={'mb-6'}>
          <PasswordInput
            value={values.password || ''}
            name={"password"}
            onChange={handleChange}
            icon="EditIcon"
          />
        </div>

        <div className={styles.buttons}>
          <Button htmlType="button" type="secondary" onClick={handleResetValues}>
            Отмена
          </Button>
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      </form>
    </section>
  )
}
