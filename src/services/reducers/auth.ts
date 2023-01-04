import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  AUTH_CHECKED,
} from "../constans/auth";

import { TUser } from "../../utils/types";
import { TAuthActions } from "../actions/auth";

type TInitialState = {
  user: null | TUser;
  isAuth: boolean;
  isLoading: boolean;
  hasError: boolean;
};

const initialState: TInitialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  hasError: false,
};

export default function authReducer(
  state = initialState,
  action: TAuthActions
): TInitialState {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAuth: true,
      };
    }
    case REGISTER_ERROR: {
      return {
        ...state,
        isAuth: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAuth: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isLoading: false,
        hasError: false,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
      };
    }
    case GET_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
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
