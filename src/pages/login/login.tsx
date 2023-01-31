import { FormEvent, useEffect, useState } from "react";
import Form from "../../components/form/form";
import { CustomLink } from "../../components/form/link/link";
import styles from "../page.module.css";
import useForm from "../../hook/useForm";
import { loginAction } from "../../services/actions/auth";
import { useDispatch, useSelector } from "../../services/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { values, handleChange } = useForm();
  const [showPassord, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const { hasError, message } = useSelector((store) => store.auth);

  function onIconClick() {
    setShowPassword(!showPassord);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(loginAction(values as { email: string; password: string }));

    if (hasError) {
      toast.error(message);
    }

    if (!hasError) {
      navigate(location.state?.from || "/");
    }
  }

  useEffect(() => {
    if (hasError) {
      toast.error(message);
    }
  }, [hasError, message]);

  return (
    <section className={styles.section}>
      <ToastContainer />
      <Form title={"Вход"} buttonText={"Войти"} handleSubmit={handleSubmit}>
        <div className="mb-6">
          <Input
            name={"email"}
            type={"email"}
            placeholder={"E-mail"}
            onChange={handleChange}
            value={values.email || ""}
          />
        </div>

        <div className="mb-6">
          <Input
            name={"password"}
            type={showPassord ? "text" : "password"}
            placeholder={"Пароль"}
            onChange={handleChange}
            icon={showPassord ? "HideIcon" : "ShowIcon"}
            value={values.password || ""}
            onIconClick={onIconClick}
          />
        </div>
      </Form>

      <CustomLink
        text={"Вы — новый пользователь?"}
        url={"/register"}
        linkText={"Зарегистрироваться"}
      />

      <CustomLink
        text={"Забыли пароль?"}
        url={"/forgot-password"}
        linkText={"Восстановить пароль"}
      />
    </section>
  );
}
