import { useState } from 'react'
import Form from '../form/form'
import InputComponent from '../input/input'
import { Link } from 'react-router-dom'
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
          placeholder='password'
          icon={showPassord ? 'HideIcon' : 'ShowIcon'}
          onIconClick={onIconClick}
          type={showPassord ? 'text' : 'password'}
        />
      </Form>

      <p className="text text_type_main-default mb-4" style={{ textAlign: 'center' }}>
        Вы — новый пользователь?
        <Link
          to='/register'
          className='ml-2 text text_type_main-default'
        >Зарегистрироваться</Link>
      </p>

      <p className="text text_type_main-default mb-4" style={{ textAlign: 'center' }}>
        Забыли пароль?
        <Link
          to='/forgot-password'
          className='ml-2 text text_type_main-default'
        >Восстановить пароль</Link>
      </p>
    </section>
  )
}
