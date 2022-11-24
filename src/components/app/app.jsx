import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-Ingredients';
// pages
import { ForgotPassword, Login, NotFound404, Profile, Register, ResetPassword, TargetIngredient } from '../pages/index'
// styles
import styles from './app.module.css';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className={styles.main}>
        <Router>
          <Switch>
            <Route path="/" exact={true}>
              <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
              </DndProvider>
            </Route>
            <Route path="/login" exact={true}>
              <Login />
            </Route>
            <Route path="/register" exact={true}>
              <Register />
            </Route>
            <Route path="/forgot-password" exact={true}>
              <ForgotPassword />
            </Route>
            <Route path="/reset-password" exact={true}>
              <ResetPassword />
            </Route>
            <Route path="/profile" exact={true}>
              <Profile />
            </Route>
            <Route path={`/ingredients/:id`} exact={true}>
              <TargetIngredient />
            </Route>
            <Route>
              <NotFound404 />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  )
}

export default App;
