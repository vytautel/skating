/*
 *
 * ShopsPage actions
 *
 */

import { GET_SHOPS, SET_SHOPS, ERROR_MESSAGE } from './constants';

export function getShops() {
  return {
    type: GET_SHOPS,
  };
}
export function setShops(shops) {
  return {
    type: SET_SHOPS,
    shops,
  };
}
export function showError(message) {
  return {
    type: ERROR_MESSAGE,
    message,
  };
}
