import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserAction } from '../../services/actions/auth';
import { getCookie } from '../../utils/cookie';

export function ProtectedRoute({ children, onlyUnAuth = false }) {
  const user = useSelector(store => store.auth.user)
  const dispatch = useDispatch();

  useEffect(() => {
    if (getCookie('accessToken')) {
      dispatch(getUserAction())
    }
  }, [dispatch])

  // не пускает на страницу Login, когда авторизован
  if (user && onlyUnAuth) {
    return (
      <Navigate to={-1} />
    )
  }

  // редиректит на Login, когда не авторизован
  if (!user && !onlyUnAuth) {
    return (
      <Navigate to='/login' />
    )
  }

  // рендерит другую страницу, кроме Login, когда авторизован
  if (!onlyUnAuth && user) {
    return (
      children
    )
  }

  return (
    children
  )
} 