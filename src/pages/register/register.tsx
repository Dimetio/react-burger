import { FormEvent, useEffect, useState } from "react";
import Form from "../../components/form/form";
import { CustomLink } from "../../components/form/link/link";
import styles from "../page.module.css";
import useForm from "../../hook/useForm";
import { registerAction } from "../../services/actions/auth";
import { useDispatch, useSelector } from "../../services/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Register() {
  const { hasError, message } = useSelector((store) => store.auth);
  const { values, handleChange } = useForm();
  const [showPassord, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  function onIconClick() {
    setShowPassword(!showPassord);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(
      registerAction(
        values as { name: string; email: string; password: string }
      )
    );

    if (hasError) {
      toast.error(message);
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
      <Form
        title={"Регистрация"}
        buttonText={"Зарегистрироваться"}
        handleSubmit={handleSubmit}
      >
        <div className="mb-6">
          <Input
            name={"name"}
            type={"text"}
            placeholder={"Имя"}
            onChange={handleChange}
            value={values.name || ""}
          />
        </div>

        <div className="mb-6">
          <Input
            name={"email"}
            placeholder={"E-mail"}
            type={"email"}
            onChange={handleChange}
            value={values.email || ""}
          />
        </div>

        <div className="mb-6">
          <Input
            name={"password"}
            placeholder={"Пароль"}
            type={showPassord ? "text" : "password"}
            onChange={handleChange}
            value={values.password || ""}
            icon={showPassord ? "HideIcon" : "ShowIcon"}
            onIconClick={onIconClick}
          />
        </div>
      </Form>

      <CustomLink
        text={"Уже зарегистрированы?"}
        url={"/login"}
        linkText={"Войти"}
      />
    </section>
  );
}
