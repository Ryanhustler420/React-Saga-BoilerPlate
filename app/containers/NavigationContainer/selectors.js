import { createSelector } from 'reselect';

/**
 * Direct selector to the navigationContainer state domain
 */
const selectNavigationContainerDomain = () => state => state.get('navigationContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavigationContainer
 */

const selectNavigationContainer = () => createSelector(
  selectNavigationContainerDomain(),
  // This will Trigger an Error. Can be solved by Importing some files
  // Into routes.js file
  (substate) => substate.toJS()
);

export default selectNavigationContainer;
export {
  selectNavigationContainerDomain,
};
