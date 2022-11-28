import {
  registerSucces,
  registerError
} from '../actions/index.js'

import {
  signup
} from '../../utils/api'

export function register(state) {
  return function (dispatch) {
    signup(state)
      .then(res => {
        if (res.success) {
          console.log(res)
          dispatch(registerSucces(res.user))
        }
      })
      .catch(err => {
        console.log(err.message)
        dispatch(registerError())
      })
  }
}