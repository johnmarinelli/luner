import { twentyFourHoursAgo } from './utils';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (null === serializedState) {
      return undefined;
    }

    /*
     * thehaiku.club domain-specific state 
     * is in store.getState().rootReducer.
     * for now, don't serialize 3rd party state
     */
    let state = JSON.parse(serializedState);
    if (state.haikus.upvotes.lastUpvote < twentyFourHoursAgo()) {
      state.haikus.upvotes.upvotesRemaining = 3;
    }
    return state;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state.rootReducer);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error(err);
  }
};

export { loadState, saveState };
