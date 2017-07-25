import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import DevTools from 'components/containers/devTools';

import reducers from 'reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  )
);

export default store;