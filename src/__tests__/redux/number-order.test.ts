import numberOrderReducer, {
  initialState,
} from "../../services/reducers/number-order";

import {
  GET_NUMBER_ORDER_REQUEST,
  GET_NUMBER_ORDER_SUCCESS,
  GET_NUMBER_ORDER_ERROR,
} from "../../services/constants/number-order";

describe("number-order reducer", () => {
  it("should return the initial state", () => {
    expect(numberOrderReducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle GET_NUMBER_ORDER_REQUEST", () => {
    expect(
      numberOrderReducer(initialState, {
        type: GET_NUMBER_ORDER_REQUEST,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it("should handle GET_NUMBER_ORDER_SUCCESS", () => {
    expect(
      numberOrderReducer(initialState, {
        type: GET_NUMBER_ORDER_SUCCESS,
        order: 1,
      })
    ).toEqual({
      ...initialState,
      order: 1,
      isLoading: false,
    });
  });

  it("should handle GET_NUMBER_ORDER_ERROR", () => {
    expect(
      numberOrderReducer(initialState, {
        type: GET_NUMBER_ORDER_ERROR,
      })
    ).toEqual({
      ...initialState,
      order: null,
      hasError: true,
      isLoading: false,
    });
  });
});
