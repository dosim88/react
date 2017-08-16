import About from 'components/views/about/index';

import { about } from 'helpers/routes';

export default {
  path: about(),
  component: About,
  prepareData: () => {}
}