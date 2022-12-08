import { Link } from 'react-router-dom'
import styles from './link.module.css'

export default function CustomLink({ text, url, linkText }) {
  return (
    <div className={`${styles.wrapper} mb-4`}>
      <p className='text text_type_main-default'>
        {text}
      </p>

      <Link
        to={url}
        className={`${styles.link} text text_type_main-default ml-2`}
      >
        {linkText}
      </Link>
    </div>
  )
}
