import { all, call  } from 'redux-saga/effects';
// import authSaga from 'containers/AuthPage/meta/saga';
import { productSaga } from 'containers/ProductPage/meta/sagas';

export default function* saga() {
  yield all([
    call(productSaga)
  ]);
};