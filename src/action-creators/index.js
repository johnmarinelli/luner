import { normalize } from 'normalizr';
import * as schema from '../api/schema';
import * as api from '../api';
import { getIsFetching } from '../reducers';

const haikuAddSuccess = (haiku) => ({
  type: 'HAIKU_ADD_SUCCESS',
  response: haiku
});

const haikusFetchRequest = (filter = 'all') => ({
  type: 'HAIKUS_FETCH_REQUEST',
  filter
});

export const fetchHaikus = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch(haikusFetchRequest(filter));

  return api
    .fetchHaikus(filter)
    .then(response => {
      dispatch({
        type: 'HAIKUS_FETCH_SUCCESS',
        filter,
        response: normalize(response, schema.arrayOfHaikus)
      });
    },
    error => {
      dispatch({
        type: 'HAIKUS_FETCH_FAILURE',
        filter,
        message: error.message || 'Something went wrong.'
      });
    });
};

export const addHaiku = (text) => (dispatch) => 
  api.addHaiku(text)
    .then(response => 
      dispatch(haikuAddSuccess(response)));

export const haikuLineKeyUp = (content, syllables, index) => ({
  type: 'HAIKU_LINE_KEYUP',
  content,
  syllables,
  index
});
