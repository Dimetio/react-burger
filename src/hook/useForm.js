import { useState } from "react";

export default function useForm() {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
    // console.log(values)
  }

  return {
    handleChange,
    values,
    setValues,
  }
}