import React, { PropTypes } from 'react';
import { map } from 'lodash';

import BlogItem from 'components/views/BlogItem';
import PieChart from 'components/ui/PieChart';
import PaginationContainer from 'components/containers/PaginationContainer';

const BlogList = ({ posts, postsOnPage, handleLike }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        {
          map(postsOnPage, (post) => (
            <BlogItem
              key={post.id}
              post={post}
              handleLike={ () => handleLike(post.id, posts) }
            />
          ))
        }

        <PaginationContainer />
      </div>

      <div className="col-md-6">
        <PieChart columns={
          posts.map(
            post => [ post.text, post.meta.likesCount ]
          )}
        />
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