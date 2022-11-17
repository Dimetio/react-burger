import { useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//styles
import styles from './burger-Ingredients.module.css'
// components
import IngredientsList from '../ingredients-list/ingredients-list'
import Tabs from '../tabs/tabs'
import IngredientDetails from '../ingredient-details/ingredient-details'
import Modal from '../modal/modal';
// actions
import { getIngredients } from '../../services/actions/index'

export default function BurgerIngredients() {
  const dispatch = useDispatch();
  const { ingredients } = useSelector(store => store.ingredients)

  const buns = useMemo(() => ingredients.filter(item => item.type === 'bun'), [ingredients])
  const mains = useMemo(() => ingredients.filter(item => item.type === 'main'), [ingredients])
  const sauces = useMemo(() => ingredients.filter(item => item.type === 'sauce'), [ingredients])

  // popup
  const [isVisible, setIsVisible] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState(null);

  function handleOpenModal(ingredient) {
    setCurrentIngredient(ingredient)
    setIsVisible(true)
  }

  function handleCloseModal() {
    setIsVisible(false)
  }

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <section className={`${styles.section} mr-10 pt-10 pb-10`}>
      {ingredients && (
        <>
          <p className="text text_type_main-large pb-5">
            Соберите бургер
          </p>

          <Tabs />

          <div className={styles.ingredients}>
            <IngredientsList title="Булки" ingredients={buns} openModal={handleOpenModal} />
            <IngredientsList title="Соусы" ingredients={sauces} openModal={handleOpenModal} />
            <IngredientsList title="Начинки" ingredients={mains} openModal={handleOpenModal} />
          </div>

          {isVisible && (
            <Modal
              title={'Детали ингредиента'}
              closeModal={handleCloseModal}
              isOpened={isVisible}
            >
              <IngredientDetails ingredient={currentIngredient} />
            </Modal>
          )}
        </>
      )}
    </section>
  )
}
