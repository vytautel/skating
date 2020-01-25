import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the game state domain
 */

const selectGameDomain = state => state.game || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GamePage
 */

const makeSelectGame = () =>
  createSelector(
    selectGameDomain,
    substate => substate,
  );

export default makeSelectGame;
export { selectGameDomain };
