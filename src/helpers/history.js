import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

export default __CLIENT__ // eslint-disable-line
  ? createBrowserHistory()
  : createMemoryHistory();