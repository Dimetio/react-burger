import styles from './order-details.module.css'
import image from '../../images/done.svg'
import PropTypes from 'prop-types';

export default function OrderDetails({ order }) {

  return (
    <article className={`${styles.wrap} mt-30 mb-30 ml-25 mr-25`}>
      <h1 className={`${styles.number} text text_type_digits-large mb-8`}>{order}</h1>

      <h2 className='text text_type_main-medium mb-15'>идентификатор заказа</h2>

      <img src={image} alt="Готово" className={`${styles.image} mb-15`} />

      <p className='text text_type_main-default mb-2'>Ваш заказ начали готовить</p>

      <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
    </article>
  )
}

OrderDetails.propTypes = {
  order: PropTypes.number.isRequired,
};
