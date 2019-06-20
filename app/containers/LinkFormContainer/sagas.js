// import { take, call, put, select } from 'redux-saga/effects';
import { ADD_LINK } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { createLink } from './../../api/index';
import { addLinkSuccess, addLinkFailed } from './actions';
import { goBack } from 'react-router-redux';

function* addLink(action) {
  try {
    const serverLink = yield call(createLink, action.link);
    yield put(addLinkSuccess(serverLink));
    yield put(goBack());
  } catch(e) {
    yield put(addLinkFailed(action.link, e.message))
   }
}


// Individual exports for testing
export function* addLinkSaga() {
  yield* takeLatest(ADD_LINK, addLink);
}

// All sagas to be loaded
export default [
  addLinkSaga,
];
