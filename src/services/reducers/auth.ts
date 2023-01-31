import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_REQUSET,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  AUTH_CHECKED,
} from "../constants/auth";

import { TUser } from "../types/data";
import { TAuthActions } from "../actions/auth";

type TInitialState = {
  user: null | TUser;
  isAuth: boolean;
  isLoading: boolean;
  hasError: boolean;
  message: string | null;
};

export const initialState: TInitialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  hasError: false,
  message: null,
};

export default function authReducer(
  state = initialState,
  action: TAuthActions
): TInitialState {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAuth: true,
        hasError: false,
        message: null,
        isLoading: false,
      };
    }
    case REGISTER_ERROR: {
      return {
        ...state,
        message: action.message,
        isAuth: false,
        hasError: true,
        isLoading: false,
      };
    }
    case LOGIN_REQUSET: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAuth: true,
        hasError: false,
        message: null,
        isLoading: false,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        message: action.message,
        hasError: true,
        isLoading: false,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
        isAuth: false,
        isLoading: false,
        message: null,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isLoading: false,
      };
    }
    case GET_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        hasError: false,
        message: null,
        isLoading: false,
      };
    }
    case UPDATE_USER_ERROR: {
      return {
        ...state,
        hasError: true,
        message: action.message,
        isLoading: false,
      };
    }
    case AUTH_CHECKED: {
      return {
        ...state,
        isAuth: true,
      };
    }
    default: {
      return state;
    }
  }
}
