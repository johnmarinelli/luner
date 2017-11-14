import { combineReducers } from 'redux';

import pagination from './services/pagination/reducers';
import createList, * as fromList from './create-list';
import byId, * as fromById  from './by-id';
import { unique } from '../services/utils';

/*
 * returns array of haikus sorted by createdAt
 */
const getVisibleHaikus = (state, filter) => {
  const ids = fromList.getIds(state.rootReducer.haikus.listByFilter[filter]);
  const uniqueIds = unique(ids);

  return uniqueIds.map(id => 
    fromById.getHaiku(state.rootReducer.haikus.byId, id)
  ).sort((a, b) => b.createdAt - a.createdAt);
};

const getErrorMessage = (state, filter) => 
  fromList.getErrorMessage(state.rootReducer.haikus.listByFilter[filter]);

const listByFilter = combineReducers({
  all: createList('all')
});

const haikus = combineReducers({
  byId,
  listByFilter,
  pagination
});

export {
  getVisibleHaikus,
  getErrorMessage,
};

export default haikus;
