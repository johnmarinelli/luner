import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {  ConnectedRouter } from 'react-router-redux';
import App from './components/App/';

import './styles.css';

const history = createHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default Root;
