import {
  registerSuccess,
  registerError,
  loginSuccess
} from '../actions/index.js'

import {
  signup,
  signin
} from '../../utils/api'
import {
  deleteCookie,
  setCookie
} from '../../utils/cookie.js'

export function register(state) {
  return function (dispatch) {
    signup(state)
      .then(res => {
        if (res.success) {
          const authToken = res.accessToken.split('Bearer ', [1])
          setCookie('token', authToken)

          const refreshToken = res.refreshToken;
          localStorage.setItem('refreshToken', refreshToken)
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
          const authToken = res.accessToken.split('Bearer ', [1])
          setCookie('token', authToken)

          const refreshToken = res.refreshToken;
          localStorage.setItem('refreshToken', refreshToken)
          dispatch(loginSuccess(res.user))

          console.log(localStorage)
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
          deleteCookie('token')
          localStorage.removeItem('refreshToken')
          dispatch(logout(res))
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}