import * as api from '../../utils/api';

import {
  deleteCookie,
  setCookie
} from '../../utils/cookie.js';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const LOGIN_REQUSET = 'LOGIN_REQUSET';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT = 'LOGOUT';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCES';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

export const AUTH_CHECKED = 'AUTH_CHECKED'

export function registerAction(state) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_REQUEST
    })
    api.signup(state)
      .then(res => {
        if (res.success) {
          // записываю в куки токены
          const authToken = res.accessToken.split('Bearer ')[1]
          const refreshToken = res.refreshToken
          setCookie('accessToken', authToken)
          setCookie('refreshToken', refreshToken)

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
    dispatch({
      type: LOGIN_REQUSET
    })
    api.signin(state)
      .then(res => {
        if (res.success) {
          // записываю в куки токены
          const authToken = res.accessToken.split('Bearer ')[1]
          const refreshToken = res.refreshToken
          setCookie('accessToken', authToken)
          setCookie('refreshToken', refreshToken)

          dispatch({
            type: LOGIN_SUCCESS,
            user: res.user,
          })
        }
      })
      .catch(err => {
        console.log(err.message)
        dispatch({
          type: LOGIN_ERROR
        })
      })
  }
}

export function logoutAction(token) {
  return function (dispatch) {
    api.logout(token)
      .then(res => {
        if (res.success) {
          deleteCookie('accessToken')
          deleteCookie('refreshToken')
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
    dispatch({
      type: GET_USER_REQUEST
    })
    api.getUser()
      .then(res => {
        if (res.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            user: res.user,
          })
        }
      })
      .catch(err => {
        console.log(err.message)
        dispatch({
          type: GET_USER_ERROR
        })
      })
  }
}

// export function getUserAction() {
//   return async function (dispatch) {
//     try {
//       dispatch({
//         type: GET_USER_REQUEST
//       })

//       await api.getUser()
//     } catch (err) {

//     }
//   }
// }

export function updateUserAction(state) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST
    })
    api.updateUser(state)
      .then(res => {
        if (res.success) {
          dispatch({
            type: UPDATE_USER_SUCCESS,
            user: res.user,
          })
          console.log('обновил')
        }
      })
      .catch(err => {
        console.log(err.message)
        dispatch({
          type: UPDATE_USER_ERROR
        })
      })
  }
}

export function authCheckedAction() {
  return function (dispatch) {
    dispatch({
      type: AUTH_CHECKED
    })
  }
}