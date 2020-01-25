/*
 *
 * ShopsPage reducer
 *
 */
import produce from 'immer';
import { SET_SHOPS, ERROR_MESSAGE } from './constants';

export const initialState = {
  message: '',
  shops: [],
};

/* eslint-disable default-case, no-param-reassign */
const shopsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_SHOPS:
        draft.shops = action.shops;
        break;
      case ERROR_MESSAGE:
        draft.message = action.message;
        break;
    }
  });

export default shopsReducer;
