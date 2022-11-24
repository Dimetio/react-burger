import { useState } from 'react'
import Form from '../form/form'
import InputComponent from '../form/input/input'
import CustomLink from '../form/link/link'
import styles from './page.module.css'

export default function ResetPassword() {
  const [showPassord, setShowPassword] = useState(false)

  function onIconClick() {
    setShowPassword(!showPassord)
  }

  return (
    <section className={styles.section}>
      <Form
        title={'Восстановление пароля'}
        buttonText={'Сохранить'}
      >

        <InputComponent
          name={'password'}
          placeholder={'Введите новый пароль'}
          icon={showPassord ? 'HideIcon' : 'ShowIcon'}
          onIconClick={onIconClick}
          type={showPassord ? 'text' : 'password'}
        />

        <InputComponent
          name={'code'}
          placeholder={'Введите код из письма'}
          type={'text'}
        />
      </Form>

      <CustomLink
        text={'Вспомнили пароль?'}
        url={'/login'}
        linkText={'Войти'}
      />
    </section>
  )
}
