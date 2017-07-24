import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import routes from 'routes';

import MainLayout from 'components/layouts/mainLayout';
import { Provider } from 'react-redux';
import store from 'store';
import prepareData from 'helpers/prepareData';

import DevTools from 'containers/devTools';

import { matchPath } from 'react-router';

import browserHistory from 'helpers/browserHistory';

import _ from 'lodash';

import { Route, Switch } from 'react-router-dom';

function historyCb(location) {
  _.map(
    routes,
    route => {
      const match = matchPath(location.pathname, route);

      if (match) {
        const state = { location, params: match.params, routes };

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
    <BrowserRouter>
      <MainLayout>
        <Switch>
          {
            routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                component={route.component}
                prepareData={route.prepareData || null}
              />
            ))
          }
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools')
);


export default App;