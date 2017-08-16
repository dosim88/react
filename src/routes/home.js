import PostsContainer from 'components/containers/PostsContainer';

import { index } from 'helpers/routes';
import initialLoad from 'helpers/initialLoad';

import { fetchPosts } from 'actions/posts';


export default {
  exact: true,
  path: index,
  component: PostsContainer,
  prepareData: (store) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts());
  }
};