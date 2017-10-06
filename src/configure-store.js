import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import haiku from './reducers';

const history = createHistory();

const configureStore = () => {
  const reduxRouterMiddleware = routerMiddleware(history);
  const middlewares = [logger, reduxRouterMiddleware];
  const store = createStore(
    combineReducers({
      haiku,
      router: routerReducer
    }), 
    applyMiddleware(...middlewares)
  );
  return store;
};

export default configureStore;
