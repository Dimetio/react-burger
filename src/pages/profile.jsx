import styles from './page.module.css'
import { Input, PasswordInput, EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { updateUserAction } from '../services/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../hook/useForm'

export default function Profile() {

  const dispatch = useDispatch();
  const { values, handleChange, setValues } = useForm({ name: '', email: '', password: '' });
  const [defaultValues, setDefaultValues] = useState({})

  const user = useSelector(store => store.auth.user)

  function handleResetValues(e) {
    e.preventDefault();
    setValues(defaultValues)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (values !== defaultValues) {
      dispatch(updateUserAction(values))
    } else {
      console.log('данные не изменили, сделай тут тост по человечески')
    }
  }

  useEffect(() => {
    setDefaultValues(user);
    setValues(user)
  }, [setValues, user])

  return (
    <section className={styles.section_profile}>
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
