import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the rinks state domain
 */

const selectRinksDomain = state => state.rinks || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RinksPage
 */

const makeSelectRinks = () =>
  createSelector(
    selectRinksDomain,
    substate => substate,
  );

export default makeSelectRinks;
export { selectRinksDomain };
