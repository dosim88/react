/* eslint-disable indent */
import * as posts from 'constants/actionTypes/postsActionTypes';

import { API_CALL } from 'middleware/API';


export function fetchPosts(page, query) {
  const endpoint = page
    ? `/pages/${page}` : (query && query.title)
    ? '/search/'
    : '/';

  return {
    [API_CALL]: {
      endpoint,
      method: 'GET',
      query,
      types: [
        posts.FETCH_POSTS_REQUEST,
        posts.FETCH_POSTS_SUCCESS,
        posts.FETCH_POSTS_ERROR
      ]
    }
  };
}
