import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
//styles
import styles from "./profile.module.css";
// ui components
import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
//actions
import { updateUserAction } from "../../services/actions/auth";
// hooks
import useForm from "../../hook/useForm";
// interfaces
import { IForm } from "../../utils/interfaces";

export default function Profile(): JSX.Element {
  const dispatch = useDispatch();
  const { values, handleChange, setValues } = useForm();
  const [defaultValues, setDefaultValues] = useState<IForm>({
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
