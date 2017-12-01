import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter, Route } from 'react-router-dom';

import Haikus from './';
import * as actions from './actions';
import haikus, * as reducers from './reducers';

import { setupIntegrationTests } from '../test-utils';

let initialState = null;

describe('(Component) Haikus', () => {
  let wrapper, store;

  beforeEach(() => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    initialState = haikus(undefined, {});
    const state = { rootReducer: { haikus: initialState }};

    store = mockStore(state);

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Route path="/" component={Haikus}>
          </Route>
        </MemoryRouter>
      </Provider>
    );
  });

  it('renders successfully', () => {
    expect(wrapper.find(Haikus).length).toBe(1);
  });
});

describe('(Redux Store) Haikus', () => {
  let store;

  beforeEach(() => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    initialState = haikus(undefined, {});
    const state = { rootReducer: { haikus: initialState }};

    store = mockStore(state);
  });

  it('should dispatch HAIKUS_UPVOTE_SUCCESS action', () => {
    store.dispatch(actions.haikusUpvoteSuccess('0', 1));
    const storeActions = store.getActions();
    const expectedPayload = {
      type: 'HAIKUS_UPVOTE_SUCCESS',
      id: '0',
      upvotes: 1
    };
    expect(storeActions).toEqual([expectedPayload]);
  });

});

describe('(Reducers) Haikus', () => {
  
  beforeEach(() => {
    initialState = haikus(undefined, {});
  });

  it('should handle HAIKUS_UPVOTE_SUCCESS', () => {
    expect(
      haikus(initialState, actions.haikusUpvoteSuccess('0', 1)).upvotes.upvotesRemaining
    ).toEqual(
      2
    );
  });

  it('should handle HAIKUS_FIREBASE_CHILD_ADDED', () => {
    const haiku = {
      id: 1,
      author: 'john'
    };
    expect(
      Object.keys(haikus(initialState, actions.haikusFirebaseChildAdded(haiku)).byId).length
    ).toEqual(
      1
    );
  });

  it('should handle HAIKUS_FIREBASE_CHILD_UPDATED', () => {
    const haiku = {
      id: 1,
      author: 'jake'
    };
    const newHaikus = haikus(initialState, actions.haikusFirebaseChildAdded(haiku));
    expect(
      haikus(newHaikus, actions.haikusFirebaseChildUpdated(haiku)).byId[1].author
    ).toEqual(
      'jake'
    );
  });

  it('should handle HAIKUS_FIREBASE_CHILD_REMOVED', () => {
    const haiku = {
      id: 1,
      author: 'jake'
    };
    const newHaikus = haikus(initialState, actions.haikusFirebaseChildAdded(haiku));

    expect(
      Object.keys(haikus(newHaikus, actions.haikusFirebaseChildRemoved(haiku.id)).byId).length
    ).toEqual(
      0
    );
  });
});

