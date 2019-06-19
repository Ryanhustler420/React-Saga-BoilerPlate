// import { take, call, put, select } from 'redux-saga/effects';
import { LOGIN } from './constants';
import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { goBack } from 'react-router-redux';

// Individual exports for testing
function* handleLogin() {
  yield put(goBack());
}

export function* doLoginSaga() {
  yield* takeLatest(LOGIN, handleLogin)
}

// All sagas to be loaded
export default [
  doLoginSaga,
];
