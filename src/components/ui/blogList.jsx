import React, { PropTypes } from 'react';
import _ from 'lodash';

import BlogItem from 'components/ui/blogItem';

const BlogList = ({ posts, handleLike }) => {

  return <div>
    {
      _.map(posts, (post) => (
        <BlogItem
          key={post.id}
          post={post}
          //handleLike={ () => handleLike(post.id) }
        />
      ))
    }
  </div>;
};

BlogList.propTypes = {
  posts: PropTypes.array,
  handleLike: PropTypes.func
};

export default BlogList;