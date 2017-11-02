import { normalize } from 'normalizr';
import * as schema from '../api/schema';
import * as api from '../api';
import fire from '../firebase';
import { getIsFetching } from '../reducers';

const haikuFromFirebase = (haiku) => ({
  type: 'HAIKU_FROM_FIREBASE',
  filter: 'all',
  response: normalize(haiku, schema.haiku)
});

const haikuAddSuccess = (haiku) => ({
  type: 'HAIKU_ADD_SUCCESS',
  filter: 'all',
  response: normalize(haiku, schema.haiku)
});

const haikusFetchRequest = (filter = 'all') => ({
  type: 'HAIKUS_FETCH_REQUEST',
  filter
});

const haikusFetchSuccess = (filter = 'all', response) => ({
  type: 'HAIKUS_FETCH_SUCCESS',
  filter,
  response: normalize(response, schema.arrayOfHaikus)
});

const haikusFetchFailure = (filter = 'all', error) => ({
  type: 'HAIKUS_FETCH_FAILURE',
  filter,
  message: error.message || 'Something went wrong.'
});

export const haikusIncrementPage = () => ({
  type: 'HAIKUS_INCREMENT_PAGE'
});

export const haikusLastPageReached = (isLastPageReached) => ({
  type: 'HAIKUS_LAST_PAGE_REACHED',
  isLastPageReached
});

export const haikusPaginatedSuccess = (haikus, filter) => ({
  type: 'HAIKUS_PAGINATED_SUCCESS',
  filter,
  response: normalize(haikus, schema.arrayOfHaikus)
});

/*
 * when a new item is added, update state
 */
export const watchHaikuAddedEvent = (dispatch) => 
  fire
    .database()
    .ref('haikus')
    .on('child_added', (ss) => {
      dispatch(haikuFromFirebase(ss.val()))
    });

export const fetchHaikus = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch(haikusFetchRequest(filter));

  return api
    .fetchHaikus(filter)
    .then(response => dispatch(haikusFetchSuccess(filter, response)),
      error => dispatch(haikusFetchFailure(filter, error)));
};

export const addHaiku = (haiku) => (dispatch) => 
  api
    .addHaiku(haiku)
    .then(response => 
      dispatch(haikuAddSuccess(response)));

/*
 * fired whenever user keyUp's in haiku form
 */
export const haikuLineKeyUp = (content, syllables, index) => ({
  type: 'HAIKU_LINE_KEYUP',
  content,
  syllables,
  index
});

export const haikuAuthorKeyUp = (author) => ({
  type: 'HAIKU_AUTHOR_KEYUP',
  author
});
