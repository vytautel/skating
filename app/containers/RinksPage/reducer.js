/*
 *
 * RinksPage reducer
 *
 */
import produce from 'immer';
import { SET_RINKS, ERROR_MESSAGE } from './constants';

export const initialState = {
  message: '',
  rinks: [],
};

/* eslint-disable default-case, no-param-reassign */
const rinksReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_RINKS:
        draft.rinks = action.rinks;
        break;
      case ERROR_MESSAGE:
        draft.message = action.message;
        break;
    }
  });
export default rinksReducer;
