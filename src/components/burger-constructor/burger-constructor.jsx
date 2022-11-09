import { useState, useContext, useEffect, useReducer, useMemo } from 'react'
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
// actions types
import { SET_TOTAL_PRICE, RESET_TOTAL_PRICE } from '../../actions/types'

const totalPriceInitialState = { total: 0 };

function reducer(state, action) {
  switch (action.type) {
    case SET_TOTAL_PRICE:
      const totalBunPrice = (action.bun?.price ?? 0) * 2;
      const totalIngredientsPrice = action.ingredients.reduce((acc, curr) => acc + curr.price, state.total); // и тут надо useMemo?
      return { total: totalBunPrice + totalIngredientsPrice };
    case RESET_TOTAL_PRICE:
      return totalPriceInitialState;
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
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

  // только булки
  const buns = useMemo(() => ingredients.filter(item => item.type === 'bun'), [ingredients])

  // временный хак для получание одной булки
  const bun = buns[Math.floor(Math.random() * buns.length)];

  // все кроме булок
  const otherIngredients = useMemo(() => ingredients.filter(item => item.type !== 'bun'), [ingredients])

  // id всего для отправи в запрос
  const ingredientsId = useMemo(() => ingredients.map(i => i._id), [ingredients])

  // тут вообще какая-то магия проиходит, в итоге подсчитываю общий счет
  const [totalPriceState, totalPriceDispatcher] = useReducer(reducer, totalPriceInitialState, undefined)

  // popup
  const [isVisible, setIsVisible] = useState(false);

  // запрос на сервер
  function getIdIngredients() {
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
        console.log(err.message)
      })
  }

  // открывашка
  function handleOpenModal() {
    getIdIngredients()

    setIsVisible(true)
  }

  // закрывашка
  function handleCloseModal() {
    setIsVisible(false)
  }

  const { order } = orderState;

  useEffect(() => {
    totalPriceDispatcher({ type: SET_TOTAL_PRICE, ingredients })
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
