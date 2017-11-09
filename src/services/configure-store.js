import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import debugEnabled from './debug-enabled';

import rootReducer from '../reducers';

const history = createHistory();

const configureStore = () => {
  const reduxRouterMiddleware = routerMiddleware(history);
  let middlewares = [thunk, reduxRouterMiddleware];

  if (debugEnabled) { middlewares.push(logger); }
  
  const store = createStore(
    combineReducers({
      rootReducer,
      router: routerReducer
    }), 
    applyMiddleware(...middlewares)
  );
  return store;
};

export default configureStore;
