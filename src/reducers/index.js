import { combineReducers } from 'redux';
import haiku from './haiku';
import createList, * as fromList from './create-list';
import byId, * as fromById  from './by-id';

const initialPaginationState = {
  page: 1
};

const page = (state = 1, action) => {
  switch (action.type) {
    case 'HAIKUS_INCREMENT_PAGE':
      return state + 1;
    default: return state;
  }
};

const pagination = (state = initialPaginationState, action) => {
  switch (action.type) {
    case 'HAIKUS_INCREMENT_PAGE':
      return Object.assign({}, state, {
        page: page(state.page, action)
      });
    default: return state;
  }
};

const listByFilter = combineReducers({
  all: createList('all')
});

const haikus = combineReducers({
  byId,
  listByFilter,
  pagination
});

const haikuApp = combineReducers({
  haiku,
  haikus
});

export default haikuApp;

export const getVisibleHaikus = (state, filter) => {
  const ids = fromList.getIds(state.haikuApp.haikus.listByFilter[filter]);
  return ids.map(id => fromById.getHaiku(state.haikuApp.haikus.byId, id));
};

export const getIsFetching = (state, filter) => 
  fromList.getIsFetching(state.haikuApp.haikus.listByFilter[filter]);

export const getErrorMessage = (state, filter) => 
  fromList.getErrorMessage(state.haikuApp.haikus.listByFilter[filter]);

export const getCurrentPage = (state) =>
  state.haikuApp.haikus.pagination.page;
