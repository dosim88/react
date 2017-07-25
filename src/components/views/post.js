import React, { PropTypes } from 'react';
import _ from 'lodash';

import BlogItem from 'components/views/blogItem';


const Post = ({ post, match }) => {
  const id = match.params.id;

  return post
    ? <BlogItem key={id} post={post} />
    : null;
};


Post.propTypes = {
  match: PropTypes.object
};

export default Post;