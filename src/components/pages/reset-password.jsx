import { useState } from 'react'
import Form from '../form/form'
import InputComponent from '../form/input/input'
import CustomLink from '../form/link/link'
import styles from './page.module.css'
import useForm from '../../hook/useForm'
import { useHistory } from 'react-router-dom';
import { resetPassword } from '../../utils/api'

export default function ResetPassword() {
  const { values, handleChange } = useForm();
  const history = useHistory();
  const [showPassord, setShowPassword] = useState(false)

  function onIconClick() {
    setShowPassword(!showPassord)
  }

  function handleSubmit(e) {
    e.preventDefault()

    resetPassword(values.password, values.code)
      .then((data) => {
        if (data.success) {
          console.log(data)
          history.replace({ pathname: '/' })
        }
      })
      .catch(err => console.log(err.message))
  }

  return (
    <section className={styles.section}>
      <Form
        title={'Восстановление пароля'}
        buttonText={'Сохранить'}
        handleSubmit={handleSubmit}
      >

        <InputComponent
          name={'password'}
          placeholder={'Введите новый пароль'}
          icon={showPassord ? 'HideIcon' : 'ShowIcon'}
          onIconClick={onIconClick}
          type={showPassord ? 'text' : 'password'}
          handleChange={handleChange}
          value={values.password}
        />

        <InputComponent
          name={'code'}
          placeholder={'Введите код из письма'}
          type={'text'}
          handleChange={handleChange}
          value={values.code}
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
