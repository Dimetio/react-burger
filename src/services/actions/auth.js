import {
  registerSuccess,
  registerError,
  loginSuccess
} from '../actions/index.js'

import {
  signup,
  signin
} from '../../utils/api'

export function register(state) {
  return function (dispatch) {
    signup(state)
      .then(res => {
        if (res.success) {
          dispatch(registerSuccess(res.user))
        }
      })
      .catch(err => {
        console.log(err.message)
        dispatch(registerError())
      })
  }
}

export function login(state) {
  return function (dispatch) {
    signin(state)
      .then(res => {
        if (res.success) {
          console.log(res)
          dispatch(loginSuccess(res.user))
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}

export function logout(state) {
  return function (dispatch) {
    logout(state)
      .then(res => {
        if (res.success) {
          console.log(res)
          dispatch(logout(res))
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}