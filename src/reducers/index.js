import { combineReducers } from 'redux';
import haiku from './haiku';
import createList, * as fromList from './create-list';
import byId, * as fromById  from './by-id';

const listByFilter = combineReducers({
  all: createList('all')
});

const haikus = combineReducers({
  byId,
  listByFilter
});

const haikuApp = combineReducers({
  haiku,
  haikus
});

export default haikuApp;

/*
 * jm 11/10/17
 * show todos in frontend from here
 */
export const getVisibleHaikus = (state, filter) => {
  const ids = fromList.getIds(state.haikuApp.haikus.listByFilter[filter]);
  return ids.map(id => fromById.getHaiku(state.haikuApp.byId, id));
};

export const getIsFetching = (state, filter) => 
  fromList.getIsFetching(state.haikuApp.haikus.listByFilter[filter]);

export const getErrorMessage = (state, filter) => 
  fromList.getErrorMessage(state.haikuApp.haikus.listByFilter[filter]);
