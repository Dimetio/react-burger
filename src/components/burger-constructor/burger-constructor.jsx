import { useState, useContext, useEffect, useReducer } from 'react'
// styles
import styles from './burger-constructor.module.css'
// ui components
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
// popup
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
// context
import { IngredientsContext } from '../../services/context';
// api
import { getOrder } from '../../utils/api.js'

const totalPriceInitialState = { total: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "add":
      const totalBunPrice = (action.bun?.price ?? 0) * 2;
      const totalIngredientsPrice = action.ingredients.reduce((acc, curr) => acc + curr.price, state.total);
      return { total: totalBunPrice + totalIngredientsPrice };
    case "remove":
      return totalPriceInitialState;
    default:
      throw new Error(`Кабзда рулю: ${action.type}`);
  }
}

export default function BurgerConstructor() {
  const ingredients = useContext(IngredientsContext)
  // номер заказа в попапе
  const [orderState, setOrderState] = useState({
    isLoading: false,
    hasError: false,
    order: 0,
  })
  const buns = ingredients.filter(item => item.type === 'bun');
  // временный хак для получание одной булки
  const bun = buns[Math.floor(Math.random() * buns.length)];
  const otherIngredients = ingredients.filter(item => item.type !== 'bun');

  const [totalPriceState, totalPriceDispatcher] = useReducer(reducer, totalPriceInitialState, undefined)

  // popup
  const [isVisible, setIsVisible] = useState(false);

  function handleOpenModal() {
    const ingredientsId = ingredients.map(i => i._id);
    getOrder(ingredientsId)
      .then(res => {
        if (res) {
          setOrderState({
            ...orderState,
            isLoading: true,
            order: res.order.number
          })
        }
      })
      .catch(err => {
        setOrderState({ ...orderState, hasError: true, isLoading: false })
        console.log(err)
      })
    setIsVisible(true)
  }

  function handleCloseModal() {
    setIsVisible(false)
  }

  const { order } = orderState;

  useEffect(() => {
    totalPriceDispatcher({ type: "add", ingredients })
  }, [ingredients])

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
        <p className="text text_type_digits-medium mr-10">{totalPriceState.total} <CurrencyIcon type="primary" /></p>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleOpenModal}
        >
          Оформить заказ
        </Button>
      </div>

      {isVisible && (
        <Modal
          closeModal={handleCloseModal}
          isOpened={isVisible}
        >
          <OrderDetails order={order} />
        </Modal>
      )}

    </section>
  )
}

BurgerConstructor.prototype = {
}