import React, { PropTypes } from 'react';
import _ from 'lodash';

import BlogItem from 'components/views/blogItem';
import PieChart from 'components/ui/pieChart';

const BlogList = ({ posts, handleLike }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        {
          _.map(posts, (post) => (
            <BlogItem
              key={post.id}
              post={post}
              //handleLike={ () => handleLike(post.id) }
            />
          ))
        }
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
  handleLike: PropTypes.func
};

export default BlogList;