import { createStore, applyMiddleware, compose } from 'redux';

import APIMiddleware from 'middleware/API';
import thunk from 'redux-thunk';
import DevTools from 'components/containers/DevTools';

import reducers from 'reducers';

const store = (initialState) => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(APIMiddleware, thunk),
    DevTools.instrument()
  )
);

export default store;