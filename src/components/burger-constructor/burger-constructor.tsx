import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import { useNavigate } from "react-router-dom";
import { useDrop } from "react-dnd";
// styles
import styles from "./burger-constructor.module.css";
// ui components
import BurgerIngredientsList from "../burger-ingredients-list/burger-ingredients-list";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
// popup
import OrderDetails from "./order-details/order-details";
import Modal from "../modal/modal";
// types
import { TIngredient } from "../../utils/types";
import { v1 as uuid } from "uuid";

// actions
import {
  addIngredientConstructor,
  clearIngredientConstructor,
  addBunsConstructor,
  getOrder,
} from "../../services/actions";

export default function BurgerConstructor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ingredients, bun } = useSelector(
    (store) => store.constructorIngredients
  );
  const user = useSelector((store) => store.auth.user);

  const burgerId: string[] = useMemo(() => {
    if (bun === null || ingredients.length === null) {
      return [];
    }
    const ingredientsId = ingredients.map((i: TIngredient) => i._id);
    const bunsId: string = bun._id;

    return [bunsId, ...ingredientsId];
  }, [ingredients, bun]);

  const total: number = useMemo(() => {
    return (
      (bun ? bun.price * 2 : 0) +
      ingredients.reduce(
        (acc: number, item: TIngredient) => acc + item.price,
        0
      )
    );
  }, [bun, ingredients]);

  // popup
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // открывашка
  function handleOpenModal() {
    // проверка на авторизацию
    if (!user) {
      navigate("/login");
      return;
    }

    setIsVisible(true);
    dispatch(getOrder(burgerId));
  }

  // закрывашка
  function handleCloseModal() {
    setIsVisible(false);
    dispatch(clearIngredientConstructor());
  }

  const [, dropTargetRef] = useDrop({
    accept: "ingredient",
    drop(data: TIngredient) {
      data.type === "bun"
        ? dispatch(addBunsConstructor(data))
        : dispatch(addIngredientConstructor({ ...data, _dndid: uuid() }));
    },
  });

  return (
    <section
      ref={dropTargetRef}
      className={`${styles.section} pt-25 pl-4 pr-4 pb-10`}
    >
      {bun ? (
        <>
          <article className={`${styles.bun} pl-8 pb-4`}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </article>

          <ul className={`${styles.ingredients}`}>
            <BurgerIngredientsList />
          </ul>

          <article className={`${styles.bun} pl-8 pt-4`}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </article>

          <div className={`${styles.total} pt-10`}>
            <p className="text text_type_digits-medium mr-10">
              {total} <CurrencyIcon type="primary" />
            </p>
            <Button
              htmlType="button"
              type="primary"
              size="large"
              onClick={handleOpenModal}
            >
              Оформить заказ
            </Button>
          </div>

          {isVisible && (
            <Modal closeModal={handleCloseModal} isOpened={isVisible}>
              <OrderDetails />
            </Modal>
          )}
        </>
      ) : (
        <p className="text text_type_main-medium">Сначала выберите булку</p>
      )}
    </section>
  );
}
