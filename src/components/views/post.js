import React, { PropTypes } from 'react';

import BlogItem from 'components/views/blogItem';


const Post = ({ post, handleLike }) => (
  post
    ? <BlogItem key={post.id} post={post} handleLike={ () => handleLike(post.id) } />
    : null
);


Post.propTypes = {
  post: PropTypes.object,
  handleLike: PropTypes.func
};

export default Post;