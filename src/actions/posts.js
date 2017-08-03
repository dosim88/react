import * as posts from 'constants/actionTypes/postsActionTypes';

import { API_CALL } from 'middleware/API';


export function fetchPosts() {
  return {
    [API_CALL]: {
      endpoint: '/',
      method: 'GET',
      query: {},
      types: [
        posts.FETCH_POSTS_REQUEST,
        posts.FETCH_POSTS_SUCCESS,
        posts.FETCH_POSTS_ERROR
      ]
    }
  };
}

export const changePage = (pageNumber) => ({
  type: posts.POSTS_CHANGE_PAGE,
  pageNumber
});
