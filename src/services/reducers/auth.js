import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER_SUCCESS,
  GET_USER_SUCCESS,
  AUTH_CHECKED,
} from '../actions/auth'

const initialState = {
  user: {},
  isAuth: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAuth: true
      }
    }
    case REGISTER_ERROR: {
      return {
        ...state,
        isAuth: false
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAuth: true
      }
    }
    case LOGOUT: {
      return {
        ...state,
        user: {},
        isAuth: false,
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
      }
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
      }
    }
    case AUTH_CHECKED: {
      return {
        ...state,
        isAuth: true
      }
    }
    default: {
      return state;
    }
  }
}