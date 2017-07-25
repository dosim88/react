import request from 'superagent';
import _ from 'lodash';

import * as types from 'constants/actionTypes/postsActionTypes';

import { API_PATH } from 'constants/config';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

const successLike = (response) => ({
  type: types.POSTS_LIKE_SUCCESS,
  response
});

const errorLike = () => ({
  type: types.POSTS_LIKE_ERROR
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(`${API_PATH}/`)
      .end((err, response) => {
        err ? dispatch(errorPosts()) : dispatch(receivePosts(response.body));
      });
  };
}

export function postsLike(id, posts) {
  return (dispatch) => (
    request
      .put(`${API_PATH}/posts/${id}/like`)
      .end((err, response) => {
        const entries = _.cloneDeep(posts);
        const index = _.findIndex(posts, post => post.id == id);

        entries[index] = response.body;

        err ? dispatch(errorLike()) : dispatch(successLike(entries));
      })
  );
}