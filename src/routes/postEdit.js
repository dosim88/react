import PostEditContainer from 'components/containers/PostEditContainer';

import { postEdit } from 'helpers/routes';
import initialLoad from 'helpers/initialLoad';

import { fetchPost } from 'actions/post';

export default {
  path: postEdit(),
  component: PostEditContainer,
  prepareData: (store, query, params) => {
    if (initialLoad() || !params.id) return;
    return store.dispatch(fetchPost(params.id));
  }
};