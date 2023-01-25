import {
  TConstructorIngredient,
  TIngredient,
  TOrder,
  TUser,
  TWSOrders,
} from "../services/types/data";

export const mockIngredient: TIngredient = {
  calories: 14,
  carbohydrates: 11,
  fat: 22,
  image: "https://code.s3.yandex.net/react/code/sauce-04.png",
  image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
  name: "Соус фирменный Space Sauce",
  price: 80,
  proteins: 50,
  type: "sauce",
  __v: 0,
  _id: "60d3b41abdacab0026a733cd",
};

export const mockConstructorIngredient: TConstructorIngredient = {
  calories: 14,
  carbohydrates: 11,
  fat: 22,
  image: "https://code.s3.yandex.net/react/code/sauce-04.png",
  image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
  name: "Соус фирменный Space Sauce",
  price: 80,
  proteins: 50,
  type: "sauce",
  __v: 0,
  _id: "60d3b41abdacab0026a733cd",
  _dndid: "0",
};

export const mockBun: TIngredient = {
  calories: 643,
  carbohydrates: 85,
  fat: 26,
  image: "https://code.s3.yandex.net/react/code/bun-01.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
  name: "Флюоресцентная булка R2-D3",
  price: 988,
  proteins: 44,
  type: "bun",
  __v: 0,
  _id: "60d3b41abdacab0026a733c7",
};

export const mockUser: TUser = {
  email: "test@mail.ruu",
  name: "test12",
  password: "12",
};

export const mockOrder: TOrder = {
  ingredients: ["60d3b41abdacab0026a733c6", "60d3b41abdacab0026a733cc"],
  name: "Spicy краторный бургер",
  number: 37618,
  status: "done",
  createdAt: "2023-01-22T22:02:30.537Z",
  updatedAt: "2023-01-22T22:02:30.987Z",
  _id: "63cdb276936b17001be5303c",
};

export const mockWsMessage: TWSOrders = {
  success: true,
  orders: [mockOrder],
  total: 100500,
  totalToday: 15,
};
