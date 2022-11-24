import React, { useRef } from 'react'
import styles from './burger-ingredients-item.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { deleteIngredientConstructor } from '../../../services/actions';
import { useDrag, useDrop } from 'react-dnd';
import ingredientPropTypes from '../../../utils/prop-types'
import { PropTypes } from 'prop-types';

export default function BurgerIngredientsItem({ item, index, moveCard }) {
  const dispatch = useDispatch();
  const ref = useRef();

  function handleDelete() {
    dispatch(deleteIngredientConstructor(item))
  }

  const [{ handlerId }, drop] = useDrop({
    accept: 'component',
    collect: monitor => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover(item, monitor) {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  })

  const [{ isDragging }, drag] = useDrag({
    type: 'component',
    item: () => ({ id: item.id, index }),
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const opacity = isDragging ? 0 : 1

  if (item.type !== 'bun') drag(drop(ref));


  return (
    <div
      className={`${styles.ingredient}`}
      ref={ref}
      style={{ opacity }}
      onDrop={(e) => e.preventDefault()}
      data-handler-id={handlerId}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={handleDelete}
      />
    </div>
  )
}

BurgerIngredientsItem.propTypes = {
  item: ingredientPropTypes().isRequired,
  index: PropTypes.number.isRequired,
  moveCard: PropTypes.func.isRequired,
}