import { FC } from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { TICons } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

type TInput = {
  name?: string;
  placeholder?: string;
  icon?: keyof TICons;
  onIconClick: () => void;
  type?: "text" | "email" | "password" | undefined;
  handleChange: () => void;
  value?: string;
};

export const InputComponent: FC<TInput> = ({
  name,
  placeholder,
  icon,
  onIconClick,
  type,
  handleChange,
  value,
}) => {
  return (
    <div className="mb-6">
      <Input
        onChange={handleChange}
        value={value || ""}
        name={name}
        placeholder={placeholder}
        icon={icon}
        onIconClick={onIconClick}
        type={type}
      />
    </div>
  );
};
