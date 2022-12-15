export type TIngredient = {
  map(arg0: (item: TIngredient) => JSX.Element): import("react").ReactNode;
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

export type TIngredientList = {
  title: string;
  ingredients: TIngredient;
};
