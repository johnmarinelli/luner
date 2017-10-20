import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {  ConnectedRouter } from 'react-router-redux';
import App from './App.js';

import './Root.css';

const history = createHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default Root;
