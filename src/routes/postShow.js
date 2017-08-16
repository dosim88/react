import PostContainer from 'components/containers/PostContainer';

import { posts } from 'helpers/routes';
import initialLoad from 'helpers/initialLoad';

import { fetchPost } from 'actions/post';


export default {
  exact: true,
  path: posts(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    if (initialLoad() || !params.id) return;
    return store.dispatch(fetchPost(params.id));
  }
}