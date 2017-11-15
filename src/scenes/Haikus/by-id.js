/*
 * TODO: refactor byId 
 */

const upvoteSuccess = (state, action) => {
  switch (action.type) {
    case 'HAIKUS_UPVOTE_SUCCESS': 
      return Object.assign({}, state, {
        upvotes: action.upvotes
      });
    default: return state;
  }

};

/*
 * state is list of haikus indexed by id 
 * if action has a response field, it's been
 * through normalizr
 */
const byId = (state = {}, action) => {
  if (action.response) {
    switch (action.type) {
      case 'HAIKUS_PAGINATED_SUCCESS': {
        return {
          ...state,
          ...action.response.entities.haikus
        };
      }
      default: return state;
    }
  }
  else {
    switch (action.type) {
      case 'HAIKUS_UPVOTE_SUCCESS': {
        const { id } = action;
        return Object.assign({}, state, {
          [id]: upvoteSuccess(state[id], action)
        });
      }
      default: return state;

    }
  }

};

export default byId;

/*
 * state corresponds to the same state as byId reducer
 */
export const getHaiku = (state, id) => state[id];
