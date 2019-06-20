/*
 *
 * LinkFormContainer actions
 *
 */

import {
  ADD_LINK
} from './constants';

export function addLink(link) {
  return {
    type: ADD_LINK,
    link,
  };
}
