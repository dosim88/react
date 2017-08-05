import * as post from 'constants/actionTypes/postActionTypes';

import { API_CALL } from 'middleware/API';


export function fetchPost(id) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}`,
      method: 'GET',
      query: {},
      types: [
        post.FETCH_POST_REQUEST,
        post.FETCH_POST_SUCCESS,
        post.FETCH_POST_ERROR
      ]
    }
  };
}