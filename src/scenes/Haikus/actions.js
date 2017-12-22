import { normalize } from 'normalizr';
import * as api from './api';
import * as schema from '../services/schema.js';

const haikusIncrementPage = () => ({
  type: 'HAIKUS_INCREMENT_PAGE'
});

const haikusLastPageReached = isLastPageReached => ({
  type: 'HAIKUS_LAST_PAGE_REACHED',
  isLastPageReached
});

const haikusPaginatedSuccess = (haikus, filter) => ({
  type: 'HAIKUS_PAGINATED_SUCCESS',
  filter,
  response: normalize(haikus, schema.arrayOfHaikus)
});

const haikusUpvoteSuccess = (id, upvotes) => ({
  type: 'HAIKUS_UPVOTE_SUCCESS',
  id,
  upvotes
});

const haikusUpvoteError = error => ({
  type: 'HAIKUS_UPVOTE_ERROR',
  error
});

const haikusFirebaseChildAdded = haiku => ({
  type: 'HAIKUS_FIREBASE_CHILD_ADDED',
  filter: 'all',
  haiku
});

const haikusFirebaseChildUpdated = haiku => ({
  type: 'HAIKUS_FIREBASE_CHILD_UPDATED',
  haiku
});

const haikusFirebaseChildRemoved = id => ({
  type: 'HAIKUS_FIREBASE_CHILD_REMOVED',
  id
});

const upvoteHaiku = haiku => dispatch =>
  api
    .findHaiku(haiku.id)
    .then(ss =>
      api.updateHaiku(ss, {
        updatedAt: Date.now(),
        upvotes: (haiku.upvotes || 0) + 1
      })
    )
    .then(({ id, upvotes }) => dispatch(haikusUpvoteSuccess(id, upvotes)))
    .catch(err => dispatch(haikusUpvoteError(err)));

export {
  haikusIncrementPage,
  haikusLastPageReached,
  haikusPaginatedSuccess,
  haikusUpvoteSuccess,
  haikusUpvoteError,
  haikusFirebaseChildAdded,
  haikusFirebaseChildUpdated,
  haikusFirebaseChildRemoved,
  upvoteHaiku
};
