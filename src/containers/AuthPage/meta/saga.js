import { all, takeLatest, put, call } from 'redux-saga/effects'
import * as constants from './constants'
import * as actions from './actions'
import { saveDataToStorage, clearDataFromStorage } from 'utils/cookie'
import authApi from 'api/authApi'
import openNotification from 'components/Common/Notification'
import MESSAGES from 'constants/messages'

function* handleLogout() {
  yield call(clearDataFromStorage)
}

function* handleSignup({ payload: { email, password, displayName } }) {
  try {
    const body = { email, password, displayName }
    const response = yield authApi.signup(body)
    yield call(saveDataToStorage, response)
    yield put(actions.signupSuccess(response))
  } catch (error) {
    yield put(actions.signupError(error))
  }
}

function* handleSignin({ payload: { email, password } }) {
  try {
    const body = { email, password }
    const response = yield authApi.signin(body)
    yield call(saveDataToStorage, response)
    yield put(actions.signinSuccess(response))
  } catch (error) {
    yield put(actions.signinError(error))
  }
}

function* handleChangePassword({ payload: { data } }) {
  try {
    const response = yield authApi.changePassword(data)
    yield put(actions.changePasswordSuccess(response))
    openNotification('success', MESSAGES.AUTH.CHANGE_PASSWORD_SUCCESS)
  } catch (error) {
    yield put(actions.changePasswordError(error))
    openNotification('error', MESSAGES.AUTH.CHANGE_PASSWORD_ERROR)
  }
}

function* handleSendResetPassword({ payload: { email } }) {
  try {
    const response = yield authApi.sendResetPassword(email)
    yield put(actions.sendResetPasswordSuccess(response))
    openNotification('success', MESSAGES.AUTH.SEND_RESET_PASSWORD_SUCCESS)
  } catch (error) {
    yield put(actions.sendResetPasswordError(error))
    openNotification('error', MESSAGES.AUTH.SEND_RESET_PASSWORD_ERROR)
  }
}

export default function* () {
  yield all([
    yield takeLatest(constants.LOGOUT, handleLogout),
    yield takeLatest(constants.SIGNIN, handleSignin),
    yield takeLatest(constants.SIGNUP, handleSignup),
    yield takeLatest(constants.CHANGE_PASSWORD, handleChangePassword),
    yield takeLatest(constants.SEND_RESET_PASSWORD, handleSendResetPassword)
  ])
}
