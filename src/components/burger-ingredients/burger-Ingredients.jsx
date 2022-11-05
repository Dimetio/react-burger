import { useState } from 'react'
import styles from './burger-Ingredients.module.css'
import IngredientsList from '../ingredients-list/ingredients-list'
import Tabs from '../tabs/tabs'
import PropTypes from 'prop-types';
import ingredientPropTypes from '../../utils/prop-types';
import IngredientDetails from '../ingredient-details/ingredient-details'
import Modal from '../modal/modal';

export default function BurgerIngredients({ ingredients }) {
  const buns = ingredients.filter(item => item.type === 'bun')
  const mains = ingredients.filter(item => item.type === 'main')
  const sauces = ingredients.filter(item => item.type === 'sauce')

  // popup
  const [isVisible, setIsVisible] = useState(false);
  const [cardIngredient, setCardIngredient] = useState(null);

  function handleOpenModal(ingredient) {
    setIsVisible(true)
    setCardIngredient(ingredient)
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

      <Modal
        title={'Детали ингредиента'}
        closeModal={handleCloseModal}
        isOpened={isVisible}
      >
        <IngredientDetails ingredient={cardIngredient} />
      </Modal>
    </section>
  )
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes()).isRequired
}