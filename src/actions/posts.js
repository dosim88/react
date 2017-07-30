import request from 'superagent';
import _ from 'lodash';

import * as types from 'constants/actionTypes/postsActionTypes';

import { API_PATH } from 'constants/config';

import { API_CALL } from 'middleware/API';

import { index } from 'helpers/routes';

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

const successLike = (response) => ({
  type: types.POSTS_LIKE_SUCCESS,
  response
});

const errorLike = () => ({
  type: types.POSTS_LIKE_ERROR
});

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