import {
  GET_ORDER_ITEM_ERROR,
  GET_ORDER_ITEM_REQUEST,
  GET_ORDER_ITEM_SUCCESS,
} from "../../services/constants/order-item";
import orderItemReducer, {
  initialState,
} from "../../services/reducers/order-item";
import { mockOrder } from "../../utils/mock-data";

describe("number-order reducer", () => {
  it("should return the initial state", () => {
    expect(orderItemReducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle GET_ORDER_ITEM_REQUEST", () => {
    expect(
      orderItemReducer(initialState, {
        type: GET_ORDER_ITEM_REQUEST,
      })
    ).toEqual({
      ...initialState,
    });
  });

  it("should handle GET_ORDER_ITEM_SUCCESS", () => {
    expect(
      orderItemReducer(initialState, {
        type: GET_ORDER_ITEM_SUCCESS,
        order: mockOrder,
      })
    ).toEqual({
      ...initialState,
      order: mockOrder,
    });
  });

  it("should handle GET_ORDER_ITEM_ERROR", () => {
    expect(
      orderItemReducer(initialState, {
        type: GET_ORDER_ITEM_ERROR,
      })
    ).toEqual({
      ...initialState,
      order: null,
    });
  });
});
