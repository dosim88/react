import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { matchPath, Switch, Route } from 'react-router-dom';

import url from 'url';
import { parse } from 'qs';
import { map, compact } from 'lodash';

import MainLayout from 'components/layouts/MainLayout';
import createStore from 'store';
import routes from 'routes';

import prepareData from 'helpers/prepareData';


const store = createStore();

function matchRoutes(currentUrl) {
  const location = url.parse(currentUrl);

  return map(
    routes,
    (route) => {
      const match = matchPath(location.pathname, route);
      const query = location.search
        ? parse(location.search.substr(1))
        : {};

      if (match && match.isExact)
        return {
          route,
          data: {
            query,
            params: match.params
          }
        };
    }
  );
}

export default (req, res) => {
  const matchedRoutes = compact(matchRoutes(req.url));

  Promise.all(
    compact(
      map(
        matchedRoutes,
        (matchedRoute) => {
          const { route } = matchedRoute;
          const { data } = matchedRoute;

          return route.prepareData(store, data.query, data.params);
        }
      )
    )
  ).then(() => {
    const currentRoutes = map(matchedRoutes, 'route');
    const initialState = JSON.stringify(store.getState());
    const content = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <MainLayout>
            <Switch>
              {
                currentRoutes.map((route, i) => (
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
        </StaticRouter>
      </Provider>
    );

    res.status(200);
    res.render(
      'index',
      { initialState, content }
    );
  });
}