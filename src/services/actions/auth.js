import * as api from '../../utils/api';

import {
  deleteCookie,
  setCookie
} from '../../utils/cookie.js';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const CHECK_TOKEN = 'CHECK_TOKEN';


export function registerAction(state) {
  return function (dispatch) {
    api.signup(state)
      .then(res => {
        if (res.success) {
          const authToken = res.accessToken.split('Bearer ')[1]
          setCookie('token', authToken)

          const refreshToken = res.refreshToken;
          localStorage.setItem('refreshToken', refreshToken)
          dispatch({
            type: REGISTER_SUCCESS,
            user: res.user,
          })
        }
      })
      .catch(err => {
        console.log(err.message)
        dispatch({
          type: REGISTER_ERROR,
        })
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
          dispatch({
            type: LOGIN_SUCCESS,
            user: res.user,
          })
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
          dispatch({
            type: LOGOUT,
          })
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
          dispatch({
            type: CHECK_TOKEN,
            user: res.user,
          })
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}

export function updateUserAction(state) {
  return function (dispatch) {
    api.updateUser(state)
      .then(res => {
        if (res.success) {
          dispatch({
            type: CHECK_TOKEN,
            user: res.user,
          })
          console.log('обновил')
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}