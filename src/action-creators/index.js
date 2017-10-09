import * as api from '../api';

const haikuAddSuccess = (haiku) => ({
  type: 'HAIKU_ADD_SUCCESS',
  response: haiku
});

export const addHaiku = (text) => (dispatch) => 
  api.addHaiku(text)
    .then(response => 
      dispatch(haikuAddSuccess(response)));


export const haikuLineDone = (line, index) => ({
  type: 'HAIKU_LINE_DONE',
  line,
  index
});

export const haikuLineKeyUp = (content, syllables, index) => ({
  type: 'HAIKU_LINE_KEYUP',
  content,
  syllables,
  index
});
