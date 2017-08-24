import postReducer from 'reducers/post';
import * as postTypes from 'constants/actionTypes/postActionTypes';

describe('reducerPost', () => {
  it('Initial state', () => {
    const state = postReducer(undefined, {});

    expect(state).toEqual({
      isFetching: false,
      error: false,
      entry: null
    });
  });

  it('FETCH_POST_REQUEST', () => {
    const state = postReducer(undefined, {
      type: postTypes.FETCH_POST_REQUEST
    });

    expect(state).toEqual({
      isFetching: true,
      error: false,
      entry: null
    });
  });

  it('FETCH_POST_SUCCESS', () => {
    const state = postReducer(undefined, {
      type: postTypes.FETCH_POST_SUCCESS,
      response: 'test data'
    });

    expect(state).toEqual({
      isFetching: false,
      error: false,
      entry: 'test data'
    });
  });
});