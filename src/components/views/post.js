import React, { PropTypes } from 'react';
import _ from 'lodash';

import BlogItem from 'components/views/blogItem';


const Post = ({ post, handleLike }) => {

  return post
    ? <BlogItem key={post.id} post={post} handleLike={ () => handleLike(post.id) } />
    : null;
};


Post.propTypes = {
  match: PropTypes.object
};

export default Post;