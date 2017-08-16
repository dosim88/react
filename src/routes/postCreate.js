import PostCreateContainer from 'components/containers/PostCreateContainer';

import { postCreate } from 'helpers/routes';


export default {
  path: postCreate(),
  component: PostCreateContainer,
  prepareData: () => {}
};