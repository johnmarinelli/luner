import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Home from './';
import { initialState } from './reducers';

import { setupIntegrationTests } from './test-utils';

/*
 * refer to http://engineering.pivotal.io/post/tdding-react-and-redux/
 * when testing components that use redux store
 */
describe('(Component) Home', () => {

  let mockStore, store, wrapper;

  beforeEach(() => {
    const state = {
      rootReducer: {
        createHaiku: Object.assign({}, initialState)
      }
    };

    const middlewares = [thunk];
    mockStore = configureStore(middlewares);
    store = mockStore(state);

    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it('renders successfully', () => {
    expect(wrapper.length).toBe(1);
  });
});
