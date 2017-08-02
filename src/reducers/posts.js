import { assign } from 'lodash/object';
import { cloneDeep, findIndex } from 'lodash';

import * as types from 'constants/actionTypes/postsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: [],
  currentPage: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, state, { entries: action.response });
    case types.POSTS_LIKE_ERROR:
      return assign({}, state, { error: true });
    case types.POSTS_LIKE_SUCCESS: {
      const entries = cloneDeep(state.entries);
      const { id } = action.response;
      const index = findIndex(entries, entry => entry.id == id);

      entries[index] = action.response;

      return assign({}, state, {entries});
    }
    case types.POSTS_CHANGE_PAGE:
      return assign({}, state, { currentPage: action.pageNumber });
    default:
      return state;
  }
}