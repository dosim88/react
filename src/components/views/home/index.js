import React, { PropTypes } from 'react';

import BlogList from 'components/views/home/BlogList';
import PieChartContainer from 'components/containers/PieChartContainer';
import PaginationContainer from 'components/containers/PaginationContainer';

const Home = ({ posts }) => (
  <div className="container">
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

BlogList.propTypes = {
  posts: PropTypes.array
};

export default Home;