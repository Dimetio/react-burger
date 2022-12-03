import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getIngredients } from '../services/actions'
import IngredientDetails from '../components/burger-ingredients/ingredient-details/ingredient-details'
import styles from './page.module.css'

export default function TargetIngredient() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { ingredients } = useSelector(store => store.ingredients)
  const ingredient = ingredients.find(item => item._id === id)

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    ingredient && (
      <section className={`${styles.section_ingredient}`}>
        <h1 className="text text_type_main-large mb-6">Детали ингредиента</h1>
        <IngredientDetails ingredient={ingredient} />
      </section>
    )
  )
}
