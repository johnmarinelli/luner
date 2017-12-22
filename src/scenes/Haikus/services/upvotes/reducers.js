import { now } from '../../../../services/utils';

const initialUpvoteState = {
  upvotesRemaining: 3,
  lastUpvote: 0
};

const upvotesRemaining = (state, action) => {
  switch (action.type) {
    case 'HAIKUS_UPVOTE_SUCCESS':
      return state - 1;
    default:
      return state;
  }
};

const lastUpvote = (state, action) => {
  switch (action.type) {
    case 'HAIKUS_UPVOTE_SUCCESS':
      return now();
    default:
      return state;
  }
};

const getUpvotesRemaining = state =>
  state.rootReducer.haikus.upvotes.upvotesRemaining;

const upvotes = (state = initialUpvoteState, action) => {
  switch (action.type) {
    case 'HAIKUS_UPVOTE_SUCCESS':
      return Object.assign({}, state, {
        upvotesRemaining: upvotesRemaining(state.upvotesRemaining, action),
        lastUpvote: lastUpvote(state.lastUpvote, action)
      });
    default:
      return state;
  }
};

export { getUpvotesRemaining };

export default upvotes;
