import { assign } from 'lodash/object';

import * as post from 'constants/actionTypes/postActionTypes';
import * as like from 'constants/actionTypes/likeActionTypes';


const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case post.FETCH_POST_REQUEST:
      return assign({}, state, { isFetching: true });
    case post.FETCH_POST_ERROR:
      return assign({}, state, { error: true });
    case post.FETCH_POST_SUCCESS:
      return assign({}, state, { entry: action.response });
    case like.POST_LIKE_ERROR:
      return assign({}, state, { error: true });
    case like.POST_LIKE_SUCCESS:
      return assign({}, state, { entry: action.response });
    default:
      return state;
  }
}