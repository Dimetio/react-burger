import { useState } from 'react'
import Form from '../form/form'
import InputComponent from '../form/input/input'
import CustomLink from '../form/link/link'
import styles from './page.module.css'
import useForm from '../../hook/useForm'
import { Navigate } from 'react-router-dom';
import { loginAction } from '../../services/actions/auth'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
  const { values, handleChange } = useForm();
  const [showPassord, setShowPassword] = useState(false)
  const dispatch = useDispatch();

  function onIconClick() {
    setShowPassword(!showPassord)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(loginAction(values))
  }

  const isAuth = useSelector(store => store.auth.isAuth)

  if (isAuth) {
    return <Navigate to={'/'} />
  }

  return (
    <section className={styles.section}>
      <Form
        title={'Вход'}
        buttonText={'Войти'}
        handleSubmit={handleSubmit}
      >
        <InputComponent
          name={'email'}
          placeholder={'E-mail'}
          type={'email'}
          handleChange={handleChange}
          value={values.email}
        />

        <InputComponent
          name={'password'}
          placeholder={'Пароль'}
          icon={showPassord ? 'HideIcon' : 'ShowIcon'}
          onIconClick={onIconClick}
          type={showPassord ? 'text' : 'password'}
          handleChange={handleChange}
          value={values.password}
        />
      </Form>

      <CustomLink
        text={'Вы — новый пользователь?'}
        url={'/register'}
        linkText={'Зарегистрироваться'}
      />

      <CustomLink
        text={'Забыли пароль?'}
        url={'/forgot-password'}
        linkText={'Восстановить пароль'}
      />
    </section>
  )
}
