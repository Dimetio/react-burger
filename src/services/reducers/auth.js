import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from '../actions/index'

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  accessToken: false,
  refreshToken: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      return {
        ...state
      }
    }
    case REGISTER_ERROR: {
      return {
        ...state
      }
    }
    default: {
      return state;
    }
  }
}
