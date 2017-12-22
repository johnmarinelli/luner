import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ReactWrapper } from 'enzyme';

/*
 * Sets up basic variables to be used by integration tests.
 * from https://medium.freecodecamp.org/real-integration-tests-with-react-redux-and-react-router-417125212638
 * Params:
 *  reducers: object with all reducers for a page
 *  initialRouterState: Optional object to set as the initial state for the router.
 * Returns:
 *  {
 *    store: reducer store containing the main dispatcher and state
 *    dispatchSpy: a jest spy function to be used on assertions of dispatch action calls
 *  }
 */
const setupIntegrationTests = reducers => {
  // create a mock jest function for asserting dispatch actions
  const dispatchSpy = jest.fn(() => ({}));
  const reducerSpy = (state, action) => dispatchSpy(action);

  // apply thunk middle ware
  const emptyStore = applyMiddleware(thunk)(createStore);
  const wrappedReducer = combineReducers({
    ...reducers
  });

  /*
   * wrap reducers in `rootReducer`.
   * `rootReducer` is an overly generic name for 
   * thehaiku.club domain-specific reducers.
   * this separates it from the react router reducer.
   */
  const combinedReducers = combineReducers({
    reducerSpy,
    rootReducer: wrappedReducer
  });

  const store = emptyStore(combinedReducers);
  return { store, dispatchSpy };
};

export { setupIntegrationTests };
