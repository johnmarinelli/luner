import { combineReducers } from 'redux';

/*
 * jm 12/10/17
 * App state shape:
 * 
 * {
 *  ...
 *  haikuApp: {
 *    haiku: { ... },
 *    haikus: {
 *      byId: { ... },
 *      listByFilter: {
 *        all: {
 *          errorMessage,
 *          ids,
 *          isFetching
 *        }
 *      }
 *    }
 *  },
 *  ...
 *
 * }
 *
 * this file controls the slice of state starting at `listByFilter`.
 */

const createList = (filter) => {

  const ids = (state = [], action) => {
    switch (action.type) {
      case 'HAIKUS_FETCH_SUCCESS': 
        return filter === action.filter ?
          action.response.result : 
          state;
      case 'HAIKU_FROM_FIREBASE': {
        /*
         * if id is not already in state
         */
        if (-1 === state.indexOf(action.response.result)) {
          return filter === action.filter ?
            [action.response.result, ...state] :
            state;
        }
        else return state;
      }
      case 'HAIKUS_PAGINATED_SUCCESS': {
        return filter === action.filter ?
          [action.response.result, ...state] :
          state;
      }
      default: return state;
    }
  };

  /*
   * reducer for fetching state
   */
  const isFetching = (state = false, action) => {
    if (filter !== action.filter) {
      return state;
    }

    switch (action.type) {
      case 'HAIKUS_FETCH_REQUEST': return true;
      case 'HAIKUS_FETCH_SUCCESS': 
      case 'HAIKUS_FETCH_FAILURE': return false;
      default: return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (filter !== action.filter) {
      return state;
    }

    switch (action.type) {
      case 'HAIKUS_FETCH_FAILURE': return action.message;
      case 'HAIKUS_FETCH_REQUEST':
      case 'HAIKUS_FETCH_SUCCESS': return null;
      default: return state;
    }
  };

  return combineReducers({ids, isFetching, errorMessage});
};

export default createList;

/*
 * selector to get ids from current state
 */
export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
