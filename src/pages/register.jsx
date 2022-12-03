import { useState } from 'react'
import Form from '../components/form/form'
import InputComponent from '../components/form/input/input'
import CustomLink from '../components/form/link/link'
import styles from './page.module.css'
import useForm from '../hook/useForm'
import { useNavigate } from 'react-router-dom';
import { registerAction } from '../services/actions/auth'
import { useDispatch } from 'react-redux'

export default function Register() {
  const { values, handleChange } = useForm();
  const [showPassord, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onIconClick() {
    setShowPassword(!showPassord)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(registerAction(values))
  }

  return (
    <section className={styles.section}>
      <Form
        title={'Регистрация'}
        buttonText={'Зарегистрироваться'}
        handleSubmit={handleSubmit}
      >
        <InputComponent
          name={'name'}
          placeholder={'Имя'}
          type={'text'}
          handleChange={handleChange}
          value={values.name}
        />

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
        text={'Уже зарегистрированы?'}
        url={'/login'}
        linkText={'Войти'}
      />
    </section>
  )
}
