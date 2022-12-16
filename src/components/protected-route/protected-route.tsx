import { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getUserAction } from "../../services/actions/auth";
import { getCookie } from "../../utils/cookie";
// types
import { TProtected } from "../../utils/types";

const ProtectedRoute: FC<TProtected> = ({ children, anonymous = false }) => {
  const user = useSelector((store: any) => store.auth.user);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (getCookie("accessToken")) {
      dispatch<any>(getUserAction());
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
};

export default ProtectedRoute;
