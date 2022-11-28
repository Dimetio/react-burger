import {
  registerSuccess,
  registerError,
  loginSuccess,
  logout,
  checkToken,
} from '../actions/index.js'

import * as api from '../../utils/api'
import {
  deleteCookie,
  setCookie
} from '../../utils/cookie.js'

export function registerAction(state) {
  return function (dispatch) {
    api.signup(state)
      .then(res => {
        if (res.success) {
          const authToken = res.accessToken.split('Bearer ')[1]
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

export function loginAction(state) {
  return function (dispatch) {
    api.signin(state)
      .then(res => {
        if (res.success) {
          const authToken = res.accessToken.split('Bearer ')[1]
          setCookie('token', authToken)

          const refreshToken = res.refreshToken;
          localStorage.setItem('refreshToken', refreshToken)
          dispatch(loginSuccess(res.user))
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}

export function logoutAction(token) {
  return function (dispatch) {
    api.logout(token)
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


export function getUserAction() {
  return function (dispatch) {
    api.getUser()
      .then(res => {
        if (res.success) {
          console.log(res)
          dispatch(checkToken())
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}