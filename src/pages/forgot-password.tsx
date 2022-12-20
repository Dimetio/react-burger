import { FormEvent } from "react";
import Form from "../components/form/form";
import { CustomLink } from "../components/form/link/link";
import styles from "./page.module.css";
import { forgotPassword } from "../utils/api";
import useForm from "../hook/useForm";
import { useNavigate } from "react-router-dom";

import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

export default function ForgotPassword() {
  const { values, handleChange } = useForm();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    forgotPassword(values.email)
      .then((data) => {
        if (data.success) {
          console.log(data);
          navigate("/reset-password");
          // флаг для пропуска в reset-password
          localStorage.setItem("forgot-success", "true");
        }
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <section className={styles.section}>
      <Form
        title={"Восстановление пароля"}
        buttonText={"Восстановить"}
        handleSubmit={handleSubmit}
      >
        <div className="mb-6">
          <Input
            type={"email"}
            placeholder={"Укажите e-mail"}
            onChange={handleChange}
            icon={"CurrencyIcon"}
            value={values.email || ""}
            name={"email"}
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
