import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configure-store';
import Root from './Root';
import { watchHaikuAddedEvent } from './action-creators';

const store = configureStore();
watchHaikuAddedEvent(store.dispatch);

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('root')
);
