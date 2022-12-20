import { FormEvent, useState } from "react";
import Form from "../components/form/form";
import { CustomLink } from "../components/form/link/link";
import styles from "./page.module.css";
import useForm from "../hook/useForm";
import { loginAction } from "../services/actions/auth";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { values, handleChange } = useForm();
  const [showPassord, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  function onIconClick() {
    setShowPassword(!showPassord);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch<any>(loginAction(values));
    navigate(location.state?.from || "/");
    console.log("добавить тост на успех авторизации");
  }

  return (
    <section className={styles.section}>
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
