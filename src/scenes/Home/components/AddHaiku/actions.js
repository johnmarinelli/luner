import * as api from './services';
import normalize from 'normalizr';
import * as services from '../../services';

const haikuAddSuccess = (haiku) => ({
  type: 'HAIKU_ADD_SUCCESS',
  filter: 'all',
  response: normalize(haiku, services.haiku)
});

export const addHaiku = (haiku) => (dispatch) => 
  api
    .addHaiku(haiku)
    .then(response => 
      dispatch(haikuAddSuccess(response)));
