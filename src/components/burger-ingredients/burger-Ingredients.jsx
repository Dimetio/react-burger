import { useState, useMemo, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//styles
import styles from './burger-Ingredients.module.css'
// components
import IngredientsList from '../ingredients-list/ingredients-list'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
// actions
import { getIngredients, } from '../../services/actions/index'

export default function BurgerIngredients() {
  const dispatch = useDispatch();
  const { ingredients } = useSelector(store => store.ingredients)

  const buns = useMemo(() => ingredients.filter(item => item.type === 'bun'), [ingredients])
  const mains = useMemo(() => ingredients.filter(item => item.type === 'main'), [ingredients])
  const sauces = useMemo(() => ingredients.filter(item => item.type === 'sauce'), [ingredients])

  const categoryBuns = useRef(null);
  const categorySauces = useRef(null);
  const categoryMain = useRef(null);
  const listRef = useRef(null);

  //  tab
  const [currentCategory, setCurrentCategory] = useState(['bun']);

  function handleClickTab(tab) {
    tab.current.scrollIntoView({ behavior: 'smooth' });
  }

  function handleScroll() {
    const listTop = listRef.current.offsetTop;
    const bunsTop = categoryBuns.current.getBoundingClientRect().top;
    const saucesTop = categorySauces.current.getBoundingClientRect().top;
    const mainTop = categoryMain.current.getBoundingClientRect().top;

    if (bunsTop - listTop <= 100) {
      setCurrentCategory('bun');
    }
    if (saucesTop - listTop <= 100) {
      setCurrentCategory('sauce');
    }
    if (mainTop - listTop <= 100) {
      setCurrentCategory('main');
    }
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

          <div className={`${styles.tabs} pb-10`}>
            <div onClick={() => handleClickTab(categoryBuns)}>
              <Tab value="bun" active={currentCategory === 'bun'} onClick={setCurrentCategory}>
                Булки
              </Tab>
            </div>
            <div onClick={() => handleClickTab(categorySauces)}>
              <Tab value="sauce" active={currentCategory === 'sauce'} onClick={setCurrentCategory}>
                Соусы
              </Tab>
            </div>
            <div onClick={() => handleClickTab(categoryMain)}>
              <Tab value="main" active={currentCategory === 'main'} onClick={setCurrentCategory}>
                Начинки
              </Tab>
            </div>
          </div>

          <div
            ref={listRef}
            className={styles.ingredients}
            onScroll={handleScroll}
          >
            <IngredientsList title="Булки" ref={categoryBuns} ingredients={buns} />
            <IngredientsList title="Соусы" ref={categorySauces} ingredients={sauces} />
            <IngredientsList title="Начинки" ref={categoryMain} ingredients={mains} />
          </div>
        </>
      )}
    </section>
  )
}
