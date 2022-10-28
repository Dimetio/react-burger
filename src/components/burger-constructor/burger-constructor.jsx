import React from 'react'
import styles from './burger-constructor.module.css'
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerConstructor({ ingredients }) {
  return (
    <div className={`${styles.constructor} pt-25 pl-4 pr-4 pb-10`}>

      <article className={`${styles.constructor_element} pl-8`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={ingredients[0].name}
          price={ingredients[0].price}
          thumbnail={ingredients[0].image}
        />
      </article>
      <article className={styles.constructor_element}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={ingredients[1].name}
          price={ingredients[1].price}
          thumbnail={ingredients[1].image}
        />
      </article>
      <article className={styles.constructor_element}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={ingredients[1].name}
          price={ingredients[1].price}
          thumbnail={ingredients[1].image}
        />
      </article>
      <article className={styles.constructor_element}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={ingredients[1].name}
          price={ingredients[1].price}
          thumbnail={ingredients[1].image}
        />
      </article>
      <article className={styles.constructor_element}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={ingredients[1].name}
          price={ingredients[1].price}
          thumbnail={ingredients[1].image}
        />
      </article>
      <article className={`${styles.constructor_element} pl-8`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={ingredients[0].name}
          price={ingredients[0].price}
          thumbnail={ingredients[0].image}
        />
      </article>

      <div className={`${styles.total} pt-10`}>
        <p className="text text_type_digits-medium mr-10">610 <CurrencyIcon type="primary" /></p>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}
