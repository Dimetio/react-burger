import { FormEvent, ReactNode } from "react";
import styles from "./form.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

type TFormProps = {
  title: string;
  children: ReactNode;
  buttonText: string;
  handleSubmit: (e: FormEvent) => void;
};

export default function Form({
  title,
  children,
  buttonText,
  handleSubmit,
}: TFormProps): JSX.Element {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className="text text_type_main-medium mb-6">{title}</h1>

      {children}

      <div className="mb-20">
        <Button htmlType="submit" type="primary" size="medium">
          {buttonText}
        </Button>
      </div>
    </form>
  );
}
