import { ReactNode } from "react";

export type TIngredient = {
  _id: string;
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
};

export type TIngrdientCardProps = {
  ingredient: TIngredient;
};

export type TIngredientListProps = {
  title: string;
  ingredients: TIngredient[];
};

export type TConstructorIngredient = TIngredient & { _dndid: string };

export type TLink = {
  text: string;
  url: string;
  linkText: string;
};

export type TProtected = {
  children: JSX.Element;
  anonymous?: boolean;
};

export type TModalProps = {
  children: ReactNode;
  title?: string;
  closeModal: () => void;
  isOpened: boolean;
};

export type TModalOverlayProps = {
  closeModal: () => void;
};

// для signin и signup
export type TUser = {
  name: string;
  email: string;
  password: string;
};

export type TUserResponse = {
  success: boolean;
  user: Pick<TUser, "name" | "email">;
  accessToken: string;
  refreshToken: string;
};

export type TRefreshTokenResponse = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

// для forgot и reset password
export type resetPasswordRequest = {
  success: boolean;
  message: string;
};
