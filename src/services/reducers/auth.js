import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/index'

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  accessToken: '',
  refreshToken: '',
  isAuth: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.data,
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
        user: action.data,
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
    default: {
      return state;
    }
  }
}