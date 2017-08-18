import * as posts from 'constants/actionTypes/postsActionTypes';

import { API_CALL } from 'middleware/API';


export function fetchPosts(page) {
  return {
    [API_CALL]: {
      endpoint: `/pages/${page || 1}`,
      method: 'GET',
      types: [
        posts.FETCH_POSTS_REQUEST,
        posts.FETCH_POSTS_SUCCESS,
        posts.FETCH_POSTS_ERROR
      ]
    }
  };
}
