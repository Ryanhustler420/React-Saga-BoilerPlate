/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { REQUEST_LINKS_SUCCEEDED, UPDATE_VOTE_SUCCESSFUL } from './constants';
import { ADD_LINK_SUCCESS } from '../LinkFormContainer/constants';

const initialState = fromJS({
  links: [],
});

function addLink(existingState, linkFromServer) {
  const links = existingState.get('links');
  links.push(linkFromServer);
  return existingState.set('links', links);
}

function updateLinks(existingState, linkFromServer) {
  const links = existingState.get('links');
  const index = links.findIndex(l => l.id === linkFromServer.id);
  links[index] = linkFromServer;
  return existingState.set('links', links);
}

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINKS_SUCCEEDED:
      return state.set('links', action.links);
    case ADD_LINK_SUCCESS:
      return addLink(state, action.link);
    case UPDATE_VOTE_SUCCESSFUL:
      return updateLinks(state, action.link);
    default:
      return state;
  }
}

export default linkListContainerReducer;
