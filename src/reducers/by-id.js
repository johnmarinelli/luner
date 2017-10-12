/*
 * state is list of haikus indexed by id 
 * if action has a response field, it's been
 * through normalizr
 */
const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.haikus
    };
  }

  return state;
};

export default byId;

/*
 * state corresponds to the same state as byId reducer
 */
export const getHaiku = (state, id) => state[id];
