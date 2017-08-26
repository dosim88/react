import React, { PropTypes } from 'react';

import { map } from 'lodash';

import BlogItem from 'components/views/BlogItem';

const BlogList = ({ posts }) => (
  <div>
    {
      map(posts, (post) => (
        <BlogItem key={post.id} post={post} />
      ))
    }
  </div>
);

BlogList.propTypes = {
  posts: PropTypes.array
};

export default BlogList;