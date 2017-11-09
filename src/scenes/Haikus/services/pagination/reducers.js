const initialPaginationState = {
  page: 0,
  lastPageReached: false
};

const getCurrentPage = (state) =>
  state.rootReducer.haikus.pagination.page;

const getLastPageReached = (state) =>
    state.rootReducer.haikus.pagination.lastPageReached;

const page = (state, action) => {
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
    case 'HAIKUS_LAST_PAGE_REACHED': {
      return Object.assign({}, state, {
        lastPageReached: action.isLastPageReached
      });
    }
    default: return state;
  }
};

export { 
  getCurrentPage,
  getLastPageReached
};

export default pagination;
