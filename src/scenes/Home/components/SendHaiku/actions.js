import * as api from './services';
import normalize from 'normalizr';
import * as schema from '../../services';

const haikuAddSuccess = (haiku) => ({
  type: 'HAIKU_ADD_SUCCESS',
  filter: 'all',
  response: normalize(haiku, schema.haiku)
});

export const addHaiku = (haiku) => (dispatch) => 
  api
    .addHaiku(haiku)
    .then(response => 
      dispatch(haikuAddSuccess(response)));
