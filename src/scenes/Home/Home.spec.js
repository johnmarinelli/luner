import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Home from './';
import { haikuLineKeyUp, haikuAuthorKeyUp } from './actions';
import createHaiku, { initialState } from './reducers';

import { setupIntegrationTests } from '../test-utils';

describe('(Component) Home', () => {
  let wrapper, store;

  beforeEach(() => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    store = mockStore({ rootReducer: { createHaiku: initialState } });

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

describe('(Redux Store) Home', () => {
  let store;

  beforeEach(() => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const state = { rootReducer: { createHaiku: initialState } };

    store = mockStore(state);
  });

  it('should dispatch HAIKU_LINE_KEYUP action', () => {
    store.dispatch(haikuLineKeyUp('a', 1, 0));
    const actions = store.getActions();
    const expectedPayload = {
      type: 'HAIKU_LINE_KEYUP',
      content: 'a',
      syllables: 1,
      index: 0
    };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch HAIKU_AUTHOR_KEYUP action', () => {
    store.dispatch(haikuAuthorKeyUp('john'));
    const actions = store.getActions();
    const expectedPayload = {
      type: 'HAIKU_AUTHOR_KEYUP',
      author: 'john'
    };
    expect(actions).toEqual([expectedPayload]);
  });
});

describe('(Reducers) Home', () => {
  it('should return the initial state', () => {
    expect(createHaiku(undefined, {})).toEqual(initialState);
  });

  it('should handle HAIKU_LINE_KEYUP', () => {
    expect(
      createHaiku(initialState, haikuLineKeyUp('a', 1, 0)).lines[0].content
    ).toEqual('a');
  });

  it('should handle HAIKU_AUTHOR_KEYUP', () => {
    expect(createHaiku(initialState, haikuAuthorKeyUp('john')).author).toEqual(
      'john'
    );
  });
});

describe('(Integration) Home', () => {
  let store, wrapper, dispatchSpy;

  beforeEach(() => {
    ({ store, dispatchSpy } = setupIntegrationTests({ createHaiku }));

    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it('autofocuses the first input line', () => {
    const firstInput = wrapper.find('input').first();
    expect(firstInput.props().autoFocus).toBe(true);
  });
});
