import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import posts from './posts';
import post from './post';

export default combineReducers({
  posts,
  post,
  form: formReducer
});