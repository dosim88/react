import request from 'superagent';

import * as types from 'constants/actionTypes/postActionTypes';

import { API_PATH } from 'constants/config';

import { API_CALL } from 'middleware/API';

import { posts } from 'helpers/routes';

const successLike = (response) => ({
  type: types.POST_LIKE_SUCCESS,
  response
});

const errorLike = () => ({
  type: types.POST_LIKE_ERROR
});

export function fetchPost(id) {
  return {
    [API_CALL]: {
      endpoint: posts(id),
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
  return (dispatch) => (
    request
      .put(`${API_PATH}/posts/${id}/like`)
      .end((err, response) => {
        err ? dispatch(errorLike()) : dispatch(successLike(response.body));
      })
  );
}