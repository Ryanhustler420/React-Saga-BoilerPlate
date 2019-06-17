/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { } from './constants';

const initialState = fromJS({
  topics: [
    {
      name: 'libraries',
      description: 'links to useful open source libraries',
    },
    {
      name: 'apps',
      description: 'links to new and exciting apps',
    },
    {
      name: 'news',
      description: 'links to programming related news articles',
    },
  ]
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default navigationContainerReducer;
