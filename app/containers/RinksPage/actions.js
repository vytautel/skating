/*
 *
 * RinksPage actions
 *
 */
import { GET_RINKS, SET_RINKS, ERROR_MESSAGE } from './constants';

export function getRinks() {
  return {
    type: GET_RINKS,
  };
}
export function setRinks(rinks) {
  return {
    type: SET_RINKS,
    rinks,
  };
}
export function showError(message) {
  return {
    type: ERROR_MESSAGE,
    message,
  };
}
