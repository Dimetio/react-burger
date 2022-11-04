import { useState } from 'react'
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css'
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientPropTypes from '../../utils/prop-types';
import OrderDetails from '../order-details/order-details';

export default function BurgerConstructor({ ingredients }) {
  const buns = ingredients.filter(item => item.type === 'bun');
  // временный хак для получание одной булки
  const bun = buns[Math.floor(Math.random() * buns.length)];
  const otherIngredients = ingredients.filter(item => item.type !== 'bun');

  // popup
  const [isVisible, setIsVisible] = useState(false);

  function handleOpenModal() {
    setIsVisible(true)
  }

  function handleCloseModal() {
    setIsVisible(false)
  }

  return (
    <section className={`${styles.section} pt-25 pl-4 pr-4 pb-10`}>
      <article className={`${styles.bun} pl-8`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun?.name} (верх)`}
          price={bun?.price}
          thumbnail={bun?.image}
        />
      </article>

      <ul className={styles.ingredients}>
        {otherIngredients.map((item) => (
          <li className={`${styles.ingredient} pb-4 pr-2`} key={item._id}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          </li>
        ))}
      </ul>

      <article className={`${styles.bun} pl-8`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun?.name} (низ)`}
          price={bun?.price}
          thumbnail={bun?.image}
        />
      </article>

      <div className={`${styles.total} pt-10`}>
        <p className="text text_type_digits-medium mr-10">610 <CurrencyIcon type="primary" /></p>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleOpenModal}
        >
          Оформить заказ
        </Button>
      </div> 

      <OrderDetails
        closeModal={handleCloseModal}
        isOpened={isVisible}
      />
    </section>
  )
}

BurgerConstructor.prototype = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes()).isRequired
}