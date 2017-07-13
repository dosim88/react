import React from 'react';

import { Route, Switch } from 'react-router-dom';

import BlogPage from 'components/containers/blogPage';
import Post from 'components/containers/post';
import { postsPath } from 'helpers/routes';


const Routers = () => (
  <Switch>
    <Route exact path='/' component={BlogPage}/>
    <Route path={postsPath()} component={Post}/>
  </Switch>
);

export default Routers;