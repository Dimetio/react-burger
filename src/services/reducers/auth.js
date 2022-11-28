import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
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
        ...state
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.data,
        isAuth: true
      }
    }
    default: {
      return state;
    }
  }
}
