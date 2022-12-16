import { FC, FormEvent, MouseEvent } from "react";

import styles from "./profile.module.css";
import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useState } from "react";
import { updateUserAction } from "../../services/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hook/useForm";

type TForm = {
  name: string;
  email: string;
  password: string;
};

export default function Profile() {
  const dispatch = useDispatch();
  const { values, handleChange, setValues } = useForm();
  const [defaultValues, setDefaultValues] = useState<TForm>({
    name: "",
    email: "",
    password: "",
  });
  // TODO fix any type
  const user = useSelector((store: any) => store.auth.user);
  // TODO fix any type
  function handleResetValues(e: any) {
    e.preventDefault();
    setValues(defaultValues);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (values !== defaultValues) {
      dispatch<any>(updateUserAction(values));
    } else {
      console.log("данные не изменили, сделай тут тост по человечески");
    }
  }

  useEffect(() => {
    setDefaultValues(user);
    setValues(user);
  }, [setValues, user]);

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={"mb-6"}>
          <Input
            placeholder="Имя"
            value={values.name || ""}
            name="name"
            onChange={handleChange}
            icon={"EditIcon"}
          />
        </div>
        <div className={"mb-6"}>
          <EmailInput
            value={values.email || ""}
            name="email"
            onChange={handleChange}
            isIcon={true}
          />
        </div>
        <div className={"mb-6"}>
          <PasswordInput
            value={values.password || ""}
            name={"password"}
            onChange={handleChange}
            icon="EditIcon"
          />
        </div>

        <div className={styles.buttons}>
          <Button
            htmlType="button"
            type="secondary"
            onClick={handleResetValues}
          >
            Отмена
          </Button>
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      </form>
    </section>
  );
}
