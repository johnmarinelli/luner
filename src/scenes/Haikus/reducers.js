const getCurrentPage = (state) =>
  state.haikuApp.haikus.pagination.page;

const getVisibleHaikus = (state, filter) => {
  const ids = fromList.getIds(state.haikuApp.haikus.listByFilter[filter]);
  return ids.map(id => fromById.getHaiku(state.haikuApp.haikus.byId, id));
};

const getErrorMessage = (state, filter) => 
  fromList.getErrorMessage(state.haikuApp.haikus.listByFilter[filter]);

export {
  getCurrentPage,
  getVisibleHaikus,
  getErrorMessage
};
