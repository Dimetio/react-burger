import {
  AUTH_CHECKED,
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  UPDATE_USER_SUCCESS,
} from "../../services/constants/auth";
import authReducer, { initialState } from "../../services/reducers/auth";
import { mockUser } from "../../utils/mock-data";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(authReducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle REGISTER_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_SUCCESS,
        user: mockUser,
      })
    ).toEqual({
      ...initialState,
      user: mockUser,
      isAuth: true,
    });
  });

  it("should handle REGISTER_ERROR", () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_ERROR,
        message: "error",
      })
    ).toEqual({
      ...initialState,
      isAuth: false,
      hasError: true,
      message: "error",
    });
  });

  it("should handle LOGIN_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_SUCCESS,
        user: mockUser,
      })
    ).toEqual({
      ...initialState,
      user: mockUser,
      isAuth: true,
    });
  });

  it("should handle LOGOUT", () => {
    expect(
      authReducer(initialState, {
        type: LOGOUT,
      })
    ).toEqual({
      ...initialState,
      user: null,
      isAuth: false,
    });
  });

  it("should handle GET_USER_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: GET_USER_SUCCESS,
        user: mockUser,
      })
    ).toEqual({
      ...initialState,
      user: mockUser,
      isLoading: false,
      hasError: false,
    });
  });

  it("should handle UPDATE_USER_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: UPDATE_USER_SUCCESS,
        user: mockUser,
      })
    ).toEqual({
      ...initialState,
      user: mockUser,
    });
  });

  it("should handle GET_USER_ERROR", () => {
    expect(
      authReducer(initialState, {
        type: GET_USER_ERROR,
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      hasError: true,
    });
  });

  it("should handle AUTH_CHECKED", () => {
    expect(
      authReducer(initialState, {
        type: AUTH_CHECKED,
      })
    ).toEqual({
      ...initialState,
      isAuth: true,
    });
  });
});
