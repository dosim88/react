import React from 'react';

import { Route, Switch } from 'react-router-dom';

//import BlogPage from 'components/containers/blogPage';
//import Post from 'components/containers/post';
//import About from 'components/containers/about';

import PostsContainer from 'containers/postsContainer';
import PostContainer from 'containers/postContainer';


import { posts, about } from 'helpers/routes';

import { fetchPosts } from 'actions/posts';
import { fetchPost } from 'actions/post';


const Routers = () => (
  <Switch>
    <Route
      exact path='/'
      component={PostsContainer}
      prepareData={
        (store) => {
          store.dispatch(fetchPosts);
        }
      }
    />
    <Route
      path={posts()}
      component={PostContainer}
      prepareData={
        (store, query, params) => {
          store.dispatch(fetchPost(params.id));
        }
      }
    />
    //<Route path={about} component={About} />
  </Switch>
);

export default Routers;