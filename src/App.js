/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';

import { map } from 'lodash';

import { Provider } from 'react-redux';
import { matchPath } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import createStore from 'store';
import MainLayout from 'components/layouts/mainLayout/index';
import routes from 'routes';
import prepareData from 'helpers/prepareData';
import DevTools from 'components/containers/DevTools';
import history from 'helpers/history';

const store = createStore(window.__INITIAL_STATE__);

function historyCb(location) {
  map(
    routes,
    route => {
      const match = matchPath(location.pathname, route);

      if (match && match.isExact) {
        const state = { location, params: match.params, route };

        return prepareData(store, state);
      }
    }
  );
}

history.listen((location) => {
  historyCb(location);
});

historyCb(window.location);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MainLayout>
        <Switch>
          {
            routes.map((route, i) => (
              <Route
                key={i}
                exact={route.exact}
                path={route.path}
                component={route.component}
                prepareData={route.prepareData || null}
              />
            ))
          }
        </Switch>
      </MainLayout>
    </ConnectedRouter>
  </Provider>
);

if (__DEVELOPMENT__) {
  ReactDOM.render(
    <DevTools store={store} />,
    document.getElementById('devtools'),
    () => delete window.__INITIAL_STATE__
  );
}


export default App;