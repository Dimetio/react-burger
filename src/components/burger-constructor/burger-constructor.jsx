import React from 'react'
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css'
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientPropTypes from '../../utils/prop-types';

export default function BurgerConstructor({ ingredients }) {
  const buns = ingredients.filter(item => item.type === 'bun');
  const otherIngredients = ingredients.filter(item => item.type !== 'bun');

  return (
    <section className={`${styles.section} pt-25 pl-4 pr-4 pb-10`}>
      <article className={`${styles.bun} pl-8`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${buns[0].name} (верх)`}
          price={buns[0].price}
          thumbnail={buns[0].image}
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
          text={`${ingredients[0].name} (низ)`}
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
    </section>
  )
}

BurgerConstructor.prototype = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes()).isRequired
}