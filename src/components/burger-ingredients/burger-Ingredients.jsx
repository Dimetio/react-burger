import { useState, useContext } from 'react'
import styles from './burger-Ingredients.module.css'
import IngredientsList from '../ingredients-list/ingredients-list'
import Tabs from '../tabs/tabs'
import IngredientDetails from '../ingredient-details/ingredient-details'
import Modal from '../modal/modal';
// context
import { IngredientsContext } from '../../services/context';

export default function BurgerIngredients() {
  const ingredients = useContext(IngredientsContext)
  const buns = ingredients.filter(item => item.type === 'bun')
  const mains = ingredients.filter(item => item.type === 'main')
  const sauces = ingredients.filter(item => item.type === 'sauce')

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

  return (
    <section className={`${styles.section} mr-10 pt-10 pb-10`}>
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

    </section>
  )
}
