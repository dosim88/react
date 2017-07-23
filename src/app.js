import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import Routers from 'routes';

import MainLayout from 'components/layouts/mainLayout';
import { Provider } from 'react-redux';
import store from 'store';
import prepareData from 'helpers/prepareData';

import DevTools from 'containers/devTools';


/* old version */
//import { Router, browserHistory } from 'react-router';
//
//function historyCb(function(location) {
//  match({ location, routes }, (error, redirect, state) => {
//    if (!error && !redirect) {
//      prepareData(store, state);
//    }
//  })
//});
//
//browserHistory.listenBefore(historyCb);
//
//historyCb(window.location);
//
//<Router hostory={browserHistory} routes={Routers} />
//
/* end old version */


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Routers />
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools')
);


export default App;