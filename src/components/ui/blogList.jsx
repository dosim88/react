import React, { DOM, PropTypes } from 'react';
import _ from 'lodash';

import BlogItem from './blogItem.jsx';

const BlogList = ({ posts, handleLike }) => (
  DOM.div(
    null,
    _.map(
      posts,
      (post) => (
        React.createElement(BlogItem, {
          key: post.id,
          post,
          handleLike: () => handleLike(post.id)
        })
      )
    )
  )
);

BlogList.propTypes = {
  posts: PropTypes.array,
  handleLike: PropTypes.func
};

export default BlogList;