import * as like from 'constants/actionTypes/likeActionTypes';

import { API_CALL } from 'middleware/API';


export function postLike(id) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}/like`,
      method: 'PUT',
      query: {},
      types: [
        like.POST_LIKE_REQUEST,
        like.POST_LIKE_SUCCESS,
        like.POST_LIKE_ERROR
      ]
    }
  };
}