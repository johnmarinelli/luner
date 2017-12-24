const initialState = {
  loggedIn: false
};

const ig = (state = initialState, action) => {
  switch (action.type) {
    case 'IG_LOGGED_IN': {
      const { type, ...passThroughState } = action;
      return Object.assign({}, state, {
        ...passThroughState,
        loggedIn: true
      });
    }
    case 'IG_LOGGED_OUT':
      return Object.assign({}, state, {
        loggedIn: false
      });
    default:
      return state;
  }
};
export default ig;
