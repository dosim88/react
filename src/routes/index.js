import PostsContainer from 'components/containers/PostsContainer';
import PostContainer from 'components/containers/PostContainer';

import About from 'components/views/About';

import { index, posts, about } from 'helpers/routes';

import { fetchPosts } from 'actions/posts';
import { fetchPost } from 'actions/post';


export default [
  {
    exact: true,
    path: index,
    component: PostsContainer,
    prepareData: (store) => {
      store.dispatch(fetchPosts());
    }
  },
  {
    path: posts(),
    component: PostContainer,
    prepareData: (store, query, params) => {
      store.dispatch(fetchPost(params.id));
    }
  },
  {
    path: about(),
    component: About,
  },
];

