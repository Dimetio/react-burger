import { useState } from 'react'
import Form from '../form/form'
import InputComponent from '../form/input/input'
import CustomLink from '../form/link/link'
import styles from './page.module.css'

export default function Login() {
  const [showPassord, setShowPassword] = useState(false)

  function onIconClick() {
    setShowPassword(!showPassord)
  }

  return (
    <section className={styles.section}>
      <Form
        title={'Вход'}
        buttonText={'Войти'}
      >
        <InputComponent
          name='email'
          isIcon={false}
          placeholder='E-mail'
          type='email'
        />

        <InputComponent
          name='password'
          placeholder='Пароль'
          icon={showPassord ? 'HideIcon' : 'ShowIcon'}
          onIconClick={onIconClick}
          type={showPassord ? 'text' : 'password'}
        />
      </Form>

      <CustomLink
        text='Вы — новый пользователь?'
        url='/register'
        linkText='Зарегистрироваться'
      />

      <CustomLink
        text='Забыли пароль?'
        url='/forgot-password'
        linkText='Восстановить пароль'
      />
    </section>
  )
}
