import { useState, useEffect, useMemo } from 'react';
// styles
import styles from './burger-constructor.module.css';
// ui components
import BurgerIngredientsList from '../burger-ingredients-list/burger-ingredients-list'
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
// popup
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';

// actions
import {
  addIngredientConstructor,
  clearIngredientConstructor,
  addBunsConstructor,
  getTotalPrice,
  getOrder,
} from '../../services/actions';

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const { ingredients, bun } = useSelector(store => store.constructorIngredients);
  const { sum } = useSelector(store => store.totalPrice)

  const burgerId = useMemo(() => {
    const ingredientsId = ingredients.map(i => i._id)
    const bunsId = bun?._id;
    
    return [bunsId, ...ingredientsId]
  }, [ingredients, bun])

  // popup
  const [isVisible, setIsVisible] = useState(false);

  // открывашка
  function handleOpenModal() {
    console.log(burgerId)
    setIsVisible(true)
    dispatch(getOrder(burgerId)); // отправляю idшки, чтобы получить order
  }

  // закрывашка
  function handleCloseModal() {
    setIsVisible(false)
    dispatch(clearIngredientConstructor())
  }

  const [{ isHover }, dropTargetRef] = useDrop({
    accept: 'ingredient',
    collect: monitor => ({
      isHover: monitor.isOver(),
    }),
    drop(data) {
      data.type === 'bun'
        ? dispatch(addBunsConstructor(data))
        : dispatch(addIngredientConstructor(data))
    }
  })

  useEffect(() => {
    dispatch(getTotalPrice(ingredients, bun))
  }, [ingredients, bun, dispatch])

  return (
    <section ref={dropTargetRef} className={`${styles.section} pt-25 pl-4 pr-4 pb-10`}>
      {bun ? (
        <>
          <article className={`${styles.bun} pl-8 pb-4`}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </article>

          <ul className={`${styles.ingredients}`}>
            <BurgerIngredientsList ingredients={ingredients} />
          </ul>

          <article className={`${styles.bun} pl-8 pt-4`}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </article>

          <div className={`${styles.total} pt-10`}>
            <p className="text text_type_digits-medium mr-10">{sum} <CurrencyIcon type="primary" /></p>
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
              <OrderDetails />
            </Modal>
          )}
        </>
      ) : (
        <p className="text text_type_main-medium">Сначала выберите булку</p>
      )}
    </section>
  )
}
