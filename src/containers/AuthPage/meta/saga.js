import { all, takeLatest, put, select, call } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import { saveDataToStorage, clearDataFromStorage } from 'utils/cookie';
import authApi from 'api/authApi';

function* handleLogout() {
  yield call(clearDataFromStorage);
}

function* handleSignup({ payload: {email, password, displayName} }) {
  try {
    const body = {email, password, displayName};
    const response = yield authApi.signup(body);
    yield call(saveDataToStorage, response)
    yield put(actions.getAuthSuccess(response));
  } catch (error) {
    yield put(actions.getAuthError(error));
  }
}

function* handleSignin({ payload: {email, password} }) {
  try {
    const body = {email, password};
    const response = yield authApi.signin(body);
    yield call(saveDataToStorage, response)
    yield put(actions.getAuthSuccess(response));
  } catch (error) {
    yield put(actions.getAuthError(error));
  }
}

export default function* () {
  yield all([
    yield takeLatest(constants.LOGOUT, handleLogout),
    yield takeLatest(constants.SIGNIN, handleSignin),
    yield takeLatest(constants.SIGNUP, handleSignup),
  ])
}