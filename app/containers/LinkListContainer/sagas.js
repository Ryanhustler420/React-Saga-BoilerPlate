// import { take, call, put, select } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';

import { requestLinksSucceeded, requestLinksFailed } from './actions';

function fetchLinksFromServer(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`)
    .then(response => response.json());
}

function* fetchLinks(action) {
  try{
    const links = yield call(fetchLinksFromServer, action.topic)
    // dispatch action to store links
    yield put(requestLinksSucceeded(links));
  }catch(e) {
    console.log(e);
    // dispatch action to store error
    yield put(requestLinksFailed(e.message));
  }
}

// Individual exports for testing
export function* defaultSaga() {
  
}

// All sagas to be loaded
export default [
  defaultSaga,
];
