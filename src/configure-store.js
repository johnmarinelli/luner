import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import haikuApp from './reducers';

const history = createHistory();

const configureStore = () => {
  const reduxRouterMiddleware = routerMiddleware(history);
  const middlewares = [thunk, reduxRouterMiddleware, logger];
  const store = createStore(
    combineReducers({
      haikuApp,
      router: routerReducer
    }), 
    applyMiddleware(...middlewares)
  );
  return store;
};

export default configureStore;
