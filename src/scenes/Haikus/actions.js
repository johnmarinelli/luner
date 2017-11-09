import { normalize } from 'normalizr';
import * as schema from '../services/schema.js';

const haikusIncrementPage = () => ({
  type: 'HAIKUS_INCREMENT_PAGE'
});

const haikusLastPageReached = (isLastPageReached) => ({
  type: 'HAIKUS_LAST_PAGE_REACHED',
  isLastPageReached
});

const haikusPaginatedSuccess = (haikus, filter) => ({
  type: 'HAIKUS_PAGINATED_SUCCESS',
  filter,
  response: normalize(haikus, schema.arrayOfHaikus)
});

export {
  haikusIncrementPage,
  haikusLastPageReached,
  haikusPaginatedSuccess
};
