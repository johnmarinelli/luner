import { combineReducers } from 'redux';

import pagination from './services/pagination/reducers';
import upvotes from './services/upvotes/reducers';
import firebase from './services/firebase/reducers';
import createList, * as fromList from './create-list';
import byId, * as fromById  from './by-id';
import { unique } from '../../services/utils';

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

/*
 * returns a Haiku object or null
 */
const getFeaturedHaiku = (state, id) =>
  fromById.getHaiku(state.rootReducer.haikus.byId, id);

const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.rootReducer.haikus.listByFilter[filter]);

const listByFilter = combineReducers({
  all: createList('all')
});

const haikus = combineReducers({
  byId,
  listByFilter,
  pagination,
  upvotes
});

export {
  getVisibleHaikus,
  getFeaturedHaiku,
  getErrorMessage
};

export default haikus;
