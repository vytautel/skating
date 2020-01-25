/*
 *
 * GamePage actions
 *
 */

import { GET_GAME, SET_GAME, ERROR_MESSAGE } from './constants';

export function getGame() {
  return {
    type: GET_GAME,
  };
}
export function setGame(game) {
  return {
    type: SET_GAME,
    game,
  };
}
export function showError(message) {
  return {
    type: ERROR_MESSAGE,
    message,
  };
}
