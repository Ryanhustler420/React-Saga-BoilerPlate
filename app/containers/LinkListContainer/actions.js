/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED,
  REQUEST_LINKS,
  START_ADD,
  UPDATE_VOTE,
  UPDATE_VOTE_SUCCESSFUL,
  UPDATE_VOTE_FAILED,
} from './constants';

export function updateVote(link){
  return {
    type: UPDATE_VOTE,
    link,
  }
}

export function updateVoteSuccessful(link) {
  return {
    type: UPDATE_VOTE_SUCCESSFUL,
    link,
  }
}

export function updateVoteFailed(message, link) {
  console.log(message);
  return {
    type: UPDATE_VOTE_FAILED,
    message,
    link
  }
}

export function startAdd(topicName) {
  return {
    type: START_ADD,
    topicName,
  };
}

export function requestLinks(topicName) {
  return {
    type: REQUEST_LINKS,
    topicName
  }
}

export function requestLinksSucceeded(links) {
  return {
    type: REQUEST_LINKS_SUCCEEDED,
    links,
  }
}

export function requestLinksFailed(message) {
  return {
    type: REQUEST_LINKS_FAILED,
    message,
  }
}
