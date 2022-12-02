import { useEffect } from 'react'
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './modal.module.css'
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types'

const modalRoot = document.getElementById("modal");

export default function Modal({ children, title, closeModal, isOpened }) {
  const handleEscClose = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }

  useEffect(() => {
    if (isOpened) {
      document.addEventListener('keydown', handleEscClose)

      return () => {
        document.removeEventListener('keydown', handleEscClose)
      }
    }
  }, [isOpened])

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.content}>
        {title && (<p className={`${styles.title} text text_type_main-large ml-10 mr-10 mt-10`}>{title}</p>)}

        {children}

        <button
          type="button"
          className={styles.button_close}
          onClick={closeModal}
        >
          <CloseIcon type="primary" />
        </button>
      </div>

      <ModalOverlay closeModal={closeModal} />
    </div>,
    modalRoot
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
}

