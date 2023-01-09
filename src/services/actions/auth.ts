import * as api from "../../utils/api";

import { deleteCookie, setCookie } from "../../utils/cookie";

import { AppThunk, AppDispatch } from "../types";

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_REQUSET,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  AUTH_CHECKED,
} from "../constants/auth";

import { TUser } from "../types/data";

type TRegisterRequestAction = {
  readonly type: typeof REGISTER_REQUEST;
};

type TRegisterSuccessAction = {
  readonly type: typeof REGISTER_SUCCESS;
  user: TUser;
};

type TRegisterErrorAction = {
  readonly type: typeof REGISTER_ERROR;
};

type TLoginRequestAction = {
  readonly type: typeof LOGIN_REQUSET;
};

type TLoginSuccesAction = {
  readonly type: typeof LOGIN_SUCCESS;
  user: TUser;
};

type TLoginErrorAction = {
  readonly type: typeof LOGIN_ERROR;
};

type TLogoutAction = {
  readonly type: typeof LOGOUT;
};

type TGetUserRequestAction = {
  readonly type: typeof GET_USER_REQUEST;
};

type TGetUserSuccessAction = {
  readonly type: typeof GET_USER_SUCCESS;
  user: TUser;
};

type TGetUserErrorAction = {
  readonly type: typeof GET_USER_ERROR;
};

type TUpdateUserRequestAction = {
  readonly type: typeof UPDATE_USER_REQUEST;
};

type TUpdateUserSuccessAction = {
  readonly type: typeof UPDATE_USER_SUCCESS;
  user: TUser;
};

type TUpdateUserErrorAction = {
  readonly type: typeof UPDATE_USER_ERROR;
};

type TAuthCheckedAction = {
  readonly type: typeof AUTH_CHECKED;
};

export type TAuthActions =
  | TRegisterRequestAction
  | TRegisterSuccessAction
  | TRegisterErrorAction
  | TLoginRequestAction
  | TLoginSuccesAction
  | TLoginErrorAction
  | TLogoutAction
  | TGetUserRequestAction
  | TGetUserSuccessAction
  | TGetUserErrorAction
  | TUpdateUserRequestAction
  | TUpdateUserSuccessAction
  | TUpdateUserErrorAction
  | TAuthCheckedAction;

export const registerAction = (state: TUser): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    });
    api
      .signup(state)
      .then((res) => {
        if (res.success) {
          // записываю в куки токены
          setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", res.refreshToken);

          dispatch({
            type: REGISTER_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({
          type: REGISTER_ERROR,
        });
      });
  };
};

export const loginAction = (
  state: Pick<TUser, "email" | "password">
): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_REQUSET,
    });
    api
      .signin(state)
      .then((res) => {
        if (res.success) {
          // записываю в куки токены
          setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", res.refreshToken);
          dispatch({
            type: LOGIN_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({
          type: LOGIN_ERROR,
        });
      });
  };
};

export const logoutAction = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    api
      .logout()
      .then((res) => {
        if (res.success) {
          deleteCookie("accessToken");
          deleteCookie("refreshToken");
          dispatch({
            type: LOGOUT,
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const getUserAction = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    api
      .getUser()
      .then((res) => {
        if (res.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({
          type: GET_USER_ERROR,
        });
      });
  };
};

export const updateUserAction = (state: TUser): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });
    api
      .updateUser(state)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: UPDATE_USER_SUCCESS,
            user: res.user,
          });
          console.log("обновил");
        }
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({
          type: UPDATE_USER_ERROR,
        });
      });
  };
};

export const authCheckedAction = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: AUTH_CHECKED,
    });
  };
};
