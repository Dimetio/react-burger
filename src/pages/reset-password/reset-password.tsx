import { FormEvent, useEffect, useState } from "react";
import Form from "../../components/form/form";
import { CustomLink } from "../../components/form/link/link";
import styles from "../page.module.css";
import useForm from "../../hook/useForm";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../utils/api";

import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

export default function ResetPassword() {
  const { values, handleChange } = useForm();
  const navigate = useNavigate();
  const [showPassord, setShowPassword] = useState(false);

  function onIconClick() {
    setShowPassword(!showPassord);
  }

  function handleSubmit(e: FormEvent) {
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
        <div className="mb-6">
          <Input
            name={"password"}
            type={showPassord ? "text" : "password"}
            placeholder={"Введите новый пароль"}
            onChange={handleChange}
            icon={showPassord ? "HideIcon" : "ShowIcon"}
            value={values.password || ""}
            onIconClick={onIconClick}
          />
        </div>

        <div className="mb-6">
          <Input
            name={"code"}
            placeholder={"Введите код из письма"}
            type={"text"}
            onChange={handleChange}
            icon={showPassord ? "HideIcon" : "ShowIcon"}
            value={values.code || ""}
            onIconClick={onIconClick}
          />
        </div>
      </Form>

      <CustomLink
        text={"Вспомнили пароль?"}
        url={"/login"}
        linkText={"Войти"}
      />
    </section>
  );
}
