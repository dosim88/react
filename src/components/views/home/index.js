import React, { PropTypes } from 'react';

import BlogList from 'components/views/home/BlogList';
import PieChartContainer from 'components/containers/PieChartContainer';
import PaginationContainer from 'components/containers/PaginationContainer';

import Helmet from 'react-helmet';

const Home = ({ posts }) => (
  <div className="container">
    {
      <Helmet
        title='Home'
        meta={[
          { name: 'description', content: 'Blog home page' },
          { name: 'keywords', content: 'Blog, posts, home' }
        ]}
      />
    }
    <div className="row">
      <div className="col-md-6">
        <BlogList posts={posts} />

        <PaginationContainer />
      </div>

      <div className="col-md-6">
        <PieChartContainer />
      </div>

    </div>
  </div>
);

Home.propTypes = {
  posts: PropTypes.array
};

export default Home;