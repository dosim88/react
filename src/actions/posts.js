import * as types from 'constants/actionTypes/postsActionTypes';

import { API_CALL } from 'middleware/API';

import { index, like } from 'helpers/routes';

export function fetchPosts() {
  return {
    [API_CALL]: {
      endpoint: index,
      method: 'GET',
      query: {},
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}

export function postsLike(id) {
  return {
    [API_CALL]: {
      endpoint: like(id),
      method: 'PUT',
      query: {},
      types: [
        types.POSTS_LIKE_REQUEST,
        types.POSTS_LIKE_SUCCESS,
        types.POSTS_LIKE_ERROR
      ]
    }
  };
}

export const changePage = (pageNumber) => ({
  type: types.POSTS_CHANGE_PAGE,
  pageNumber
});
