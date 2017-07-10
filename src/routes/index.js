import React from 'react';

import { Route, Switch } from 'react-router-dom';

import BlogPage from 'components/containers/blogPage.jsx';
import Post from 'components/containers/post.js';
import { postsPath } from 'helpers/routes.js';


const Routers = () => (
  <Switch>
    <Route exact path='/' component={BlogPage}/>
    <Route path={postsPath()} component={Post}/>
  </Switch>
);

export default Routers;