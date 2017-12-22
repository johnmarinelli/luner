import { combineReducers } from 'redux';
import createHaiku from '../scenes/Home/reducers';
import haikus from '../scenes/Haikus/reducers';
import fb from '../scenes/Home/components/FacebookLoginButton/reducers';

/*
 * jm 12/10/17
 * App state shape:
 *
 * {
 *  ...
 *  rootReducer: {
 *    haiku: { ... },
 *    haikus: {
 *      byId: { ... },
 *      listByFilter: {
 *        all: {
 *          errorMessage,
 *          ids,
 *          isFetching
 *        }
 *      },
 *      pagination: {
 *        page,
 *        lastPageReached
 *      },
 *      upvotesLeft: 3
 *    }
 *  },
 *  fb: { ...  }
 *  ...
 *
 * }
 */

const rootReducer = combineReducers({
  createHaiku,
  haikus,
  fb
});

export default rootReducer;
