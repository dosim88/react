import React, { PropTypes } from 'react';

import BlogItem from 'components/views/BlogItem';


const Post = ({ post }) => (
  post
    ? <BlogItem key={post.id} post={post} />
    : null
);


Post.propTypes = {
  post: PropTypes.object,
  handleLike: PropTypes.func
};

export default Post;