import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
  const isAuth = useSelector(store => store.auth.isAuth)

  return (
    <>
      {isAuth ? children : <Navigate to='/login' />}
    </>
  )

} 