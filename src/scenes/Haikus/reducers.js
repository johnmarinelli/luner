import { combineReducers } from 'redux';

import pagination from './services/pagination/reducers';
import createList, * as fromList from './create-list';
import byId, * as fromById  from './by-id';

const getVisibleHaikus = (state, filter) => {
  const ids = fromList.getIds(state.rootReducer.haikus.listByFilter[filter]);
  return ids.map(id => 
    fromById.getHaiku(state.rootReducer.haikus.byId, id)
  ).sort((a, b) => {
    console.log('sorting');
    console.log(a);
    console.log(b);
    return b.createdAt - a.createdAt;
  });
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
