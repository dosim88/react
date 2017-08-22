import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

import fakeStore from 'helpers/tests/fakeStore';

import BlogItem from 'components/views/BlogItem';


describe('BlogItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Provider store={fakeStore}>
        <ConnectedRouter history={history}>
          <BlogItem />
        </ConnectedRouter>
      </Provider>,
      div
    );
  });

  describe('render', () => {
    it('should render the title', () => {
      const itemProps = { title: 'Hello, World!', id: 5 };

      const item = shallow(<BlogItem post={itemProps} />);

      const header = <Link to="/posts/5">Hello, World!</Link>;

      expect(item.contains(header)).toEqual(true);
    });
  });


  it('should render usual item', () => {
    const itemProps = {
      title: 'Hello, World!',
      id: 5,
      image: {
        src: 'http://localhost:3001/images/post-1.jpg',
        alt: 'Hello World!'
      }
    };

    const item = shallow(<BlogItem post={itemProps} />);

    expect(item).toMatchSnapshot();
  });
});

