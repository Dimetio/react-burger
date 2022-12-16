import { useEffect, useState } from "react";
import Form from "../components/form/form";
import {InputComponent} from "../components/form/input/input";
import { CustomLink } from "../components/form/link/link";
import styles from "./page.module.css";
import useForm from "../hook/useForm";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../utils/api";

export default function ResetPassword() {
  const { values, handleChange } = useForm();
  const navigate = useNavigate();
  const [showPassord, setShowPassword] = useState(false);

  function onIconClick() {
    setShowPassword(!showPassord);
  }

  function handleSubmit(e) {
    e.preventDefault();

    resetPassword(values.password, values.code)
      .then((data) => {
        if (data.success) {
          console.log(data);
          navigate("/");
          localStorage.remove("forgot-success");
        }
      })
      .catch((err) => console.log(err.message));
  }

  // без флага не пускать на страницу
  useEffect(() => {
    const forgotRequest = localStorage.getItem("forgot-success");
    if (!forgotRequest) {
      navigate("/forgot-password");
    }
  }, []);

  return (
    <section className={styles.section}>
      <Form
        title={"Восстановление пароля"}
        buttonText={"Сохранить"}
        handleSubmit={handleSubmit}
      >
        <InputComponent
          name={"password"}
          placeholder={"Введите новый пароль"}
          icon={showPassord ? "HideIcon" : "ShowIcon"}
          onIconClick={onIconClick}
          type={showPassord ? "text" : "password"}
          handleChange={handleChange}
          value={values.password}
        />

        <InputComponent
          name={"code"}
          placeholder={"Введите код из письма"}
          type={"text"}
          handleChange={handleChange}
          value={values.code}
        />
      </Form>

      <CustomLink
        text={"Вспомнили пароль?"}
        url={"/login"}
        linkText={"Войти"}
      />
    </section>
  );
}
