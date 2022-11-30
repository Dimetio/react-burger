import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';
import { getUserAction } from '../../services/actions';
import { authCheckedAction } from '../../services/actions/auth';

export function ProtectedRoute({ children }) {
  const isAuth = useSelector(store => store.auth.isAuth)
  const user = useSelector(store => store.auth.user)
  const location = useLocation();
  const dispatch = useDispatch()

  const store = useSelector(store => store.auth)

  function checkUserAuth() {
    return async function (dispatch) {
      if (getCookie('accessToken')) {
        try {
          await dispatch(getUserAction())
        }
        catch { }
      }
      await dispatch(authCheckedAction)
    }
  }

  // useEffect(() => {
  //   dispatch(checkUserAuth())
  //   console.log(store)
  // }, [])

  return (
    <>
      {(isAuth && user) ?
        children : null
        // <Navigate
        //   to={
        //     { pathname: location.state ?? '/login', state: { from: location.pathname } }
        //   }
        // />
      }
    </>
  )
} 