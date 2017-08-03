import { assign } from 'lodash/object';
import { cloneDeep, findIndex } from 'lodash';

import * as posts from 'constants/actionTypes/postsActionTypes';
import * as like from 'constants/actionTypes/likeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: [],
  currentPage: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case posts.FETCH_POSTS_REQUEST:
      return assign({}, state, { isFetching: true });
    case posts.FETCH_POSTS_ERROR:
      return assign({}, state, { error: true });
    case posts.FETCH_POSTS_SUCCESS:
      return assign({}, state, { entries: action.response });
    case like.POST_LIKE_ERROR:
      return assign({}, state, { error: true });
    case like.POST_LIKE_SUCCESS: {
      const entries = cloneDeep(state.entries);
      const { id } = action.response;
      const index = findIndex(entries, entry => entry.id == id);

      entries[index] = action.response;

      return assign({}, state, {entries});
    }
    case posts.POSTS_CHANGE_PAGE:
      return assign({}, state, { currentPage: action.pageNumber });
    default:
      return state;
  }
}