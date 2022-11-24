import Form from '../form/form'
import InputComponent from '../form/input/input'
import CustomLink from '../form/link/link'
import styles from './page.module.css'

export default function ForgotPassword() {
  return (
    <section className={styles.section}>
      <Form
        title={'Восстановление пароля'}
        buttonText={'Восстановить'}
      >

        <InputComponent
          name={'email'}
          placeholder={'Укажите e-mail'}
          type={'email'}
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
