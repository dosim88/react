import * as types from 'constants/actionTypes/postActionTypes';

import { API_CALL } from 'middleware/API';


export function fetchPost(id) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}`,
      method: 'GET',
      query: {},
      types: [
        types.FETCH_POST_REQUEST,
        types.FETCH_POST_SUCCESS,
        types.FETCH_POST_ERROR
      ]
    }
  };
}

export function postLike(id) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}/like`,
      method: 'PUT',
      query: {},
      types: [
        types.POST_LIKE_REQUEST,
        types.POST_LIKE_SUCCESS,
        types.POST_LIKE_ERROR
      ]
    }
  };
}