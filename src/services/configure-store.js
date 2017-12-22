import { combineReducers, createStore, applyMiddleware } from 'redux';
import debugEnabled from './debug-enabled';

/*
 * redux middlewares
 */
import logger from 'redux-logger';
import thunk from 'redux-thunk';

/*
 * react router
 */
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

/*
 * reducers
 */
import rootReducer from '../reducers';

/*
 * local storage (for persisting state)
 */
import { loadState, saveState } from './local-storage';
import { throttle } from 'lodash';

const history = createHistory();
const preloadedState = loadState();

const configureStore = () => {
  const reduxRouterMiddleware = routerMiddleware(history);
  let middlewares = [thunk, reduxRouterMiddleware];

  if (debugEnabled) {
    middlewares.push(logger);
  }

  const store = createStore(
    combineReducers({
      rootReducer,
      router: routerReducer
    }),
    {
      rootReducer: preloadedState
    },
    applyMiddleware(...middlewares)
  );

  /*
   * save state
   */
  const storeSubscription = throttle(() => {
    saveState(store.getState());
  }, 1000);

  store.subscribe(storeSubscription);

  return store;
};

export default configureStore;
