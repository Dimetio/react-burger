import { Routes, Route } from 'react-router-dom';
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


import { ProtectedRoute } from '../protected-route/protected-route';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className={styles.main}>
        <Routes>
          <Route
            path="/login"
            element={
              <ProtectedRoute onlyUnAuth={true}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <ProtectedRoute>
                <ForgotPassword />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <ProtectedRoute>
                <ResetPassword />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path={`/ingredients/:id`} element={<TargetIngredient />} />
          <Route element={<NotFound404 />} />
          <Route path="/" element={
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          } />
        </Routes>
      </main>
    </div >
  )
}

export default App;
