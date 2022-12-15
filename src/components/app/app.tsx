import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// components
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-Ingredients';
import Orders from '../orders/orders';
import Profile from '../profile/profile';
// pages
import { ForgotPassword, Login, NotFound404, ProfilePage, Register, ResetPassword, TargetIngredient } from '../../pages/index'
// styles
import styles from './app.module.css';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ProtectedRoute } from '../protected-route/protected-route';
import Modal from '../modal/modal';
import IngredientDetails from '../burger-ingredients/ingredient-details/ingredient-details';
import { useEffect } from 'react';
import { getIngredients, getUserAction } from '../../services/actions';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();
  const background = location.state && location.state.background;
  const user = useSelector((store: any) => store.auth.user)

  function onDismiss() {
    navigate(-1)
  }

  useEffect(() => {
    dispatch<any>(getIngredients())
    if (user) {
      dispatch<any>(getUserAction())
    }
  }, [])

  return (
    <div className="App">
      <AppHeader />
      <main className={styles.main}>
        <Routes location={background || location}>
          <Route
            path="/login"
            element={
              <ProtectedRoute anonymous={true}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute anonymous={true}>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <ProtectedRoute anonymous={true}>
                <ForgotPassword />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <ProtectedRoute anonymous={true}>
                <ResetPassword />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          >
            <Route index element={<Profile />} />
            <Route path="orders" element={<Orders />} />
          </Route>

          <Route path={`/ingredients/:id`} element={<TargetIngredient />} />
          <Route path='*' element={<NotFound404 />} />
          <Route path="/" element={
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          } />
        </Routes>

        {background && (
          <Routes>
            <Route path="ingredients/:id" element={
              <Modal
                title={'Детали ингредиента'}
                closeModal={onDismiss}
                isOpened={true}
              >
                <IngredientDetails />
              </Modal>
            } />
          </Routes>
        )}
      </main>
    </div >
  )
}

export default App;
