import { useState } from 'react'
import Form from '../form/form'
import InputComponent from '../form/input/input'
import CustomLink from '../form/link/link'
import styles from './page.module.css'

export default function Register() {
  const [showPassord, setShowPassword] = useState(false)

  function onIconClick() {
    setShowPassword(!showPassord)
  }

  return (
    <section className={styles.section}>
      <Form
        title={'Регистрация'}
        buttonText={'Зарегистрироваться'}
      >
        <InputComponent
          name={'Имя'}
          placeholder={'Имя'}
          type={'text'}
        />

        <InputComponent
          name={'email'}
          placeholder={'E-mail'}
          type={'email'}
        />

        <InputComponent
          name={'password'}
          placeholder={'Пароль'}
          icon={showPassord ? 'HideIcon' : 'ShowIcon'}
          onIconClick={onIconClick}
          type={showPassord ? 'text' : 'password'}
        />
      </Form>

      <CustomLink
        text={'Уже зарегистрированы?'}
        url={'/login'}
        linkText={'Войти'}
      />
    </section>
  )
}
