import request from 'superagent';

import * as types from 'constants/actionTypes/postActionTypes';

import { API_PATH } from 'constants/config';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

const successLike = (response) => ({
  type: types.POST_LIKE_SUCCESS,
  response
});

const errorLike = () => ({
  type: types.POST_LIKE_ERROR
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    return request
      .get(`${API_PATH}/posts/${id}`)
      .end((err, response) => {
        err ? dispatch(errorPost()) : dispatch(receivePost(response.body));
      });
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