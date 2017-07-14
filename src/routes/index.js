import React from 'react';

import { Route, Switch } from 'react-router-dom';

import BlogPage from 'components/containers/blogPage';
import Post from 'components/containers/post';
import About from 'components/containers/about';

import { posts, about } from 'helpers/routes';


const Routers = () => (
  <Switch>
    <Route exact path='/' component={BlogPage} />
    <Route path={posts()} component={Post} />
    <Route path={about} component={About} />
  </Switch>
);

export default Routers;