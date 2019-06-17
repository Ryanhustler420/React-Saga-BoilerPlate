/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { } from './constants';

const initialState = fromJS({
  links: [
    {
      description: 'This is the link description',
      url: 'https://github.com/facebook/react',
      topicName: 'links',
      id: 'fake,'
    },
  ],
});

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default linkListContainerReducer;
