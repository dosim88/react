import PostsContainer from 'components/containers/PostsContainer';

import { search } from 'helpers/routes';
import { fetchPosts } from 'actions/posts';

export default {
  exact: true,
  path: search(),
  component: PostsContainer,
  prepareData: (store, query) => {
    store.dispatch(fetchPosts(null, query));
  }
};