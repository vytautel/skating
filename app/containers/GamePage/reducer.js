/*
 *
 * GamePage reducer
 *
 */
import produce from 'immer';
import { SET_GAME, ERROR_MESSAGE } from './constants';

export const initialState = {
  message: '',
  game: [],
};

/* eslint-disable default-case, no-param-reassign */
const gameReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_GAME:
        draft.game = action.game;
        break;
      case ERROR_MESSAGE:
        draft.message = action.message;
        break;
    }
  });

export default gameReducer;
