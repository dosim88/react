import React, { PropTypes } from 'react';
import { map } from 'lodash';

import BlogItem from 'components/views/BlogItem';
import PieChartContainer from 'components/containers/PieChartContainer';
import PaginationContainer from 'components/containers/PaginationContainer';

const BlogList = ({ posts, handleLike }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        {
          map(posts, (post) => (
            <BlogItem
              key={post.id}
              post={post}
              handleLike={ () => handleLike(post.id) }
            />
          ))
        }

        <PaginationContainer />
      </div>

      <div className="col-md-6">
        <PieChartContainer />
      </div>

    </div>
  </div>
);

BlogList.propTypes = {
  posts: PropTypes.array,
  postsOnPage: PropTypes.array,
  currentPage: PropTypes.number,
  changePage: PropTypes.func,
  handleLike: PropTypes.func
};

export default BlogList;