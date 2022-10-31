import React from 'react';
// components
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-Ingredients';
// styles
import styles from './app.module.css';
// utils
import ingredients from '../../utils/data';


function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients}/>
      </main>
    </div>
  );
}

export default App;
