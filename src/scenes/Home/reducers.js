
const initialState = {
  lines: [
    { content: '', syllables: 0 },
    { content: '', syllables: 0 },
    { content: '', syllables: 0 },
  ],
  author: 'anonymous'
};

const lines = (state, action) => {
  switch (action.type) {
    case 'HAIKU_LINE_KEYUP': {
      const { index, content, syllables } = action;
      return [
        ...state.slice(0, index),
        { content, syllables },
        ...state.slice(index + 1)
      ];
    }
    case 'HAIKU_ADD_SUCCESS': 
      return initialState.lines;
    default: return state;
  }
};

const author = (state, action) => {
  switch (action.type) {
    case 'HAIKU_AUTHOR_KEYUP': {
      return action.author;
    }
    default: return state;
  }
};

const createHaiku = (state = initialState, action) => {
  switch (action.type) {
    case 'HAIKU_ADD_SUCCESS':
    case 'HAIKU_LINE_KEYUP':
      return Object.assign({}, state, {
        lines: lines(state.lines, action)
      });
    case 'HAIKU_AUTHOR_KEYUP':
      return Object.assign({}, state, {
        author: author(state.author, action)
      });
    default: return state;
  }
};

export default createHaiku;
