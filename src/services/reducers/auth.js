import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  CHECK_TOKEN,
} from '../actions/auth'

const initialState = {
  user: {},
  accessToken: '',
  refreshToken: '',
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
    case CHECK_TOKEN: {
      return {
        ...state,
        user: action.user
      }
    }
    default: {
      return state;
    }
  }
}