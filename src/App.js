/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';

import { map } from 'lodash';

import { Provider } from 'react-redux';
import { matchPath } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import store from 'store';
import MainLayout from 'components/layouts/MainLayout';
import routes from 'routes';
import prepareData from 'helpers/prepareData';
import DevTools from 'components/containers/DevTools';
import browserHistory from 'helpers/browserHistory';


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

browserHistory.listen((location) => {
  historyCb(location);
});

historyCb(window.location);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
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

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools')
);


export default App;