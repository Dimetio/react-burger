import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAction } from '../../services/actions/auth';
import { getCookie } from '../../utils/cookie';

export function ProtectedRoute({ children, anonymous = false }) {
  const user = useSelector(store => store.auth.user)
  const dispatch = useDispatch();
  const location = useLocation()

  useEffect(() => {
    if (getCookie('accessToken')) {
      dispatch(getUserAction())
    }
  }, [dispatch])

  const from = location.state?.from || '/'

  // не пускает на страницу Login, когда авторизован
  if (user && anonymous) {
    return (
      <Navigate to={from} />
    )
  }

  // редиректит на Login, когда не авторизован
  if (!user && !anonymous) {
    return (
      <Navigate to='/login' state={{ from: location }} />
    )
  }

  return (
    children
  )
} 