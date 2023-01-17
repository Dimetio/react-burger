import styles from './not-found.module.css'
import { Link } from 'react-router-dom'

export default function NotFound404() {
  return (
    <section className={styles.section_404}>
      <h1 className={`text text_type_main-large pt-20 mt-0 mb-4`}>
        Страница не найдена
      </h1>
      <p className="text text_type_digits-large">404</p>
      <p className="text text_type_main-default text_color_inactive pt-20 mt-0 mb-4">
        <Link to={'/'} className={styles.link}>
          На главную
        </Link>
      </p>
    </section>
  )
}
