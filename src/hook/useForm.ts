import { useState, ChangeEvent } from "react";
import { IForm } from "../utils/interfaces";

export default function useForm() {
  const [values, setValues] = useState<IForm>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return {
    handleChange,
    values,
    setValues,
  };
}
