import Contacts from 'components/views/contacts/index';

import { contacts } from 'helpers/routes';

export default {
  path: contacts(),
  component: Contacts,
  prepareData: () => {}
};