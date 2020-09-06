import * as constants from './constants'

export const signin = payload => ({
  type: constants.SIGNIN,
  payload
})

export const signinSuccess = payload => ({
  type: constants.SIGNIN_SUCCESS,
  payload
})

export const signinError = payload => ({
  type: constants.SIGNIN_ERROR,
  payload
})

export const signup = () => ({
  type: constants.SIGNUP
})

export const signupSuccess = payload => ({
  type: constants.SIGNUP_SUCCESS,
  payload
})

export const signupError = payload => ({
  type: constants.SIGNUP_ERROR,
  payload
})

export const changePassword = data => ({
  type: constants.CHANGE_PASSWORD
})

export const changePasswordSuccess = payload => ({
  type: constants.CHANGE_PASSWORD_SUCCESS,
  payload
})

export const changePasswordError = payload => ({
  type: constants.CHANGE_PASSWORD_ERROR,
  payload
})

export const sendResetPassword = email => ({
  type: constants.SEND_RESET_PASSWORD
})

export const sendResetPasswordSuccess = payload => ({
  type: constants.SEND_RESET_PASSWORD_SUCCESS,
  payload
})

export const sendResetPasswordError = payload => ({
  type: constants.SEND_RESET_PASSWORD_ERROR,
  payload
})

export const logout = () => ({
  type: constants.LOGOUT
})
