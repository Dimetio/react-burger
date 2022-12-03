import Form from '../components/form/form'
import InputComponent from '../components/form/input/input'
import CustomLink from '../components/form/link/link'
import styles from './page.module.css'
import { forgotPassword } from '../utils/api'
import useForm from '../hook/useForm'
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const { values, handleChange } = useForm();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    forgotPassword(values.email)
      .then((data) => {
        if (data.success) {
          console.log(data)
          navigate('/reset-password')
          // флаг для пропуска в reset-password
          localStorage.setItem('forgot-success', true)
        }
      })
      .catch(err => console.log(err.message))
  }

  return (
    <section className={styles.section}>
      <Form
        title={'Восстановление пароля'}
        buttonText={'Восстановить'}
        handleSubmit={handleSubmit}
      >
        <InputComponent
          name={'email'}
          placeholder={'Укажите e-mail'}
          type={'email'}
          handleChange={handleChange}
          value={values.email}
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