import { assign } from 'lodash/object';

import * as types from 'constants/actionTypes/postActionTypes';


const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, state, { entry: action.response });
    case types.POST_LIKE_ERROR:
      return assign({}, state, { error: true });
    case types.POST_LIKE_SUCCESS:
      return assign({}, state, { entry: action.response });
    default:
      return state;
  }
}