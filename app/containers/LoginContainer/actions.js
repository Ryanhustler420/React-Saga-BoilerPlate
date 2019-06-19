/*
 *
 * LoginContainer actions
 *
 */

import {
  LOGIN
} from './constants';

export function login(email) {
  return {
    type: LOGIN,
    email,
  };
}