import PostsContainer from 'components/containers/PostsContainer';

import { index } from 'helpers/routes';
import { fetchPosts } from 'actions/posts';

export default {
  exact: true,
  path: index,
  component: PostsContainer,
  prepareData: (store) => (
    store.dispatch(fetchPosts())
  )
};