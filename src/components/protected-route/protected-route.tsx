import { useEffect } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { getUserAction } from "../../services/actions/auth";
import { getCookie } from "../../utils/cookie";
// types
import { TProtected } from "../../utils/types";

export default function ProtectedRoute({
  children,
  anonymous = false,
}: TProtected): JSX.Element {
  const user = useSelector((store) => store.auth.user);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (getCookie("accessToken")) {
      dispatch(getUserAction());
    }
  }, [dispatch]);

  const from = location.state?.from || "/";

  // не пускает на страницу Login, когда авторизован
  if (user && anonymous) {
    return <Navigate to={from} />;
  }

  // редиректит на Login, когда не авторизован
  if (!user && !anonymous) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
