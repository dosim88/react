import PostsContainer from 'components/containers/PostsContainer';
import PostContainer from 'components/containers/PostContainer';

import About from 'components/views/About';

import { index, posts, about } from 'helpers/routes';

import { fetchPosts } from 'actions/posts';
import { fetchPost } from 'actions/post';

import initialLoad from 'helpers/initialLoad';


export default [
  {
    exact: true,
    path: index,
    component: PostsContainer,
    prepareData: (store) => {
      if (initialLoad()) return;
      return store.dispatch(fetchPosts());
    }
  },
  {
    path: posts(),
    component: PostContainer,
    prepareData: (store, query, params) => {
      if (initialLoad() || !params.id) return;
      return store.dispatch(fetchPost(params.id));
    }
  },
  {
    path: about(),
    component: About,
    prepareData: () => {}
  }
];

