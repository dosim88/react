import React, { DOM } from 'react';
import Image from './image.jsx'
import TextBox from './textBox.jsx'
import Meta from './meta.jsx'
import Like from './like.jsx'

const BlogItem = ({ post, handleLike }) => {
  return DOM.div(
      null,
      React.createElement(Image, post.image),
      React.createElement('br'),
      React.createElement(Meta, post.meta),
      React.createElement('br'),
      React.createElement(TextBox, null, post.text),
      React.createElement(Like, {
        postId: post.id,
        likesCount: post.meta.likesCount,
        handleLike: handleLike
      })
  )
};

BlogItem.propTypes = {
  post: PropTypes.shape({
    image:  PropTypes.shape( Image.propTypes ),
    meta: PropTypes.shape( Meta.propTypes ),
    text: PropTypes.string
  }),
  handleLike: PropTypes.func
};

export default BlogItem;
