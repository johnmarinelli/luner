const initialState = {
  loggedIn: false
};

const fb = (state = initialState, action) => {
  switch (action.type) {
    case 'FB_LOGGED_IN': {
      const { type, ...passThroughState } = action;
      return Object.assign({}, state, {
        ...passThroughState,
        loggedIn: true
      });
    }
    case 'FB_LOGGED_OUT':
      return Object.assign({}, state, {
        ...state,
        loggedIn: false
      });
    default:
      return state;
  }
};
export default fb;
