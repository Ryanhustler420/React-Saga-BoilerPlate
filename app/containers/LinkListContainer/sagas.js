// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';

import { requestLinksSucceeded, requestLinksFailed, updateVoteSuccessful, updateVoteFailed } from './actions';
import { REQUEST_LINKS, START_ADD, UPDATE_VOTE } from './constants';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';
import selectLoginContainer from '../LoginContainer/selectors';
import {updateVoteapi} from '../../api/index';

function fetchLinksFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`)
    .then(response => response.json());
}

function* fetchLinks(action) {
  try{
    const links = yield call(fetchLinksFromServer, action.topicName)
    // dispatch action to store links
    yield put(requestLinksSucceeded(links));
  }catch(e) {
    // console.log(e);
    // dispatch action to store error
    yield put(requestLinksFailed(e.message));
  }
}

function* startAdd (action) {
  yield put(push(`/topic/${action.topicName}/add`));
}

export function* startAddSaga() {
  yield* takeLatest(START_ADD, startAdd);
}

function* updateVoteCount(action) {
  // console.log(action);
  try {
    const state = yield select(selectLoginContainer());
    const updatedLink = yield call(updateVoteapi, state.email, action.link.id);
    yield put(updateVoteSuccessful(updatedLink));
    yield put(push(`/topic/${action.link.topicName}`));
  }catch(e) {
    yield put(updateVoteFailed(e.message, action.link))
  }
}

export function* updateVoteCountSaga() {
  yield* takeLatest(UPDATE_VOTE, updateVoteCount)
}

// Individual exports for testing
export function* defaultSaga() {
  yield* takeLatest(REQUEST_LINKS, fetchLinks)
}

// All sagas to be loaded
export default [
  defaultSaga,
  startAddSaga,
  updateVoteCountSaga,
];
