import { useState, useEffect } from 'react';
// components
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-Ingredients';
import Modal from '../modal/modal';
// styles
import styles from './app.module.css';
// utils
import * as api from '../../utils/api'

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    api.getBurgers()
      .then((res) => {
        if (res) {
          setIngredients(res.data)
        }
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <AppHeader />
      <main className={styles.main}>
        {
          ingredients ? (
            <>
              <BurgerIngredients ingredients={ingredients} />
              <BurgerConstructor ingredients={ingredients} />
            </>
          ) : null
        }
      </main>
      <Modal />
    </div>
  );
}

export default App;
