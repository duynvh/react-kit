import { all, takeLatest, put, call } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import productApi from 'api/productApi';

function* fetchListAsync(action) {
  try {
    const response = yield productApi.getAll(action.payload);
    yield put(actions.getListSuccess(response));
  } catch (error) {
    yield put(actions.getListError(error.message));
  }
}

function* fetchDetailAsync(action) {
  try {
    const response = yield productApi.get(action.payload);
    yield put(actions.getDetailSuccess(response));
  } catch (error) {
    yield put(actions.getDetailError(error.message));
  }
}

function* fetchListStart() {
  yield takeLatest(
    constants.GET_LIST,
    fetchListAsync
  );
}

function* fetchDetailStart() {
  yield takeLatest(
    constants.GET_DETAIL,
    fetchDetailAsync
  );
}

export function* productSaga() {
  yield all([
    call(fetchListStart),
    call(fetchDetailStart),
  ]);
}