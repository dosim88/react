import PostsContainer from 'components/containers/PostsContainer';

import { pages } from 'helpers/routes';

import { fetchPosts } from 'actions/posts';

export default {
  exact: true,
  path: pages(),
  component: PostsContainer,
  prepareData: (store, query, params) => (
    store.dispatch(fetchPosts(params.page))
  )
};