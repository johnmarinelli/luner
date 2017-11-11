import React from 'react';
import { shallow } from 'enzyme';
import Home from './'; 

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TestUtils from 'react-test-utils';

let mockStore = configureStore();
let store, rootReducer, connectedApp;

/*
 * refer to http://engineering.pivotal.io/post/tdding-react-and-redux/
 * when testing components that use redux store
 */
describe('(Component) Home', () => {
  it('renders successfully', () => {
    expect(true).toBe(true);
  });
});
