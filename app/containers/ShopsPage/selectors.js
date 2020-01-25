import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the shops state domain
 */

const selectShopsDomain = state => state.shops || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ShopsPage
 */

const makeSelectShops = () =>
  createSelector(
    selectShopsDomain,
    substate => substate,
  );

export default makeSelectShops;
export { selectShopsDomain };
