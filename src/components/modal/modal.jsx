import React from 'react'
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './modal.module.css'
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types'

const modalRoot = document.getElementById("modal");

export default function Modal({ children, title, closeModal }) {

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

      <ModalOverlay />
    </div>,
    modalRoot
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  closeModal: PropTypes.func.isRequired
}

