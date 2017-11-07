import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './services';
import Root from './scenes/Root/';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('root')
);
