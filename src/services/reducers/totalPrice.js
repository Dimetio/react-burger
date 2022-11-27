import {
  GET_TOTAL_PRICE,
} from '../actions/index'

const initialState = {
  sum: 0
}

export default function totalPriceReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOTAL_PRICE:
      const bunPrice = action.bun ? action.bun?.price * 2 : 0;
      const total = action.ingredients.reduce((acc, item) => acc + item.price, 0)
      return {
        ...state,
        sum: total + bunPrice,
      };
    default:
      return state;
  }
}
