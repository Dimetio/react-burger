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

export type TIngredientCardProps = {
  ingredient: TIngredient;
};

export type TIngredientListProps = {
  title: string;
  ingredients: TIngredient[];
};

export type TConstructorIngredient = TIngredient & { _dndid: string };

// custome link
export type TLink = {
  text: string;
  url: string;
  linkText: string;
};

// for protected route
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

// get user
export type TUserResponse = {
  success: boolean;
  user: TUser;
  accessToken: string;
  refreshToken: string;
};

// update user
export type TUserUpdate = {
  success: boolean;
  user: TUser;
  accessToken: string;
  refreshToken: string;
};

// logout
export type TUserLogout = {
  success: boolean;
};

// refresh tokeken
export type TRefreshTokenResponse = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

// для forgot и reset password
export type TResetPasswordRequest = {
  success: boolean;
  message: string;
};

// get oreder
export type TGetNumberOrder = {
  order: {
    number: number;
  };
};

// get burger
export type TGetBurgers = {
  success: boolean;
  data: TIngredient[];
};

export type TOrder = {
  _id: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type TOrders = {
  orders: TOrder[];
};

export type TWSOrders = {
  success: boolean;
  orders: TOrder[];
  total: number | null;
  totalToday: number | null;
};

export type TOrderProps = {
  item: TOrder;
  showStatus?: boolean;
};

export type TOrdersTablo = {
  orders: TOrder[];
  total: number | null;
  totalToday: number | null;
};
