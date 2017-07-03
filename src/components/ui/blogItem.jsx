import React, { DOM, PropTypes } from 'react';
import Image from './image.jsx';
import TextBox from './textBox.jsx';
import Meta from './meta.jsx';
import Like from './like.jsx';

const BlogItem = ({ post, handleLike }) => DOM.div(
  { className: 'row blog-item text-center' },
  React.createElement(Image, post.image),
  React.createElement(TextBox, null, post.text),
  React.createElement(Meta, post.meta),
  React.createElement(Like, { handleLike })
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    image:  PropTypes.shape(Image.propTypes),
    meta: PropTypes.shape(Meta.propTypes),
    text: PropTypes.string,
    id: PropTypes.number
  }),
  handleLike: PropTypes.func
};

export default BlogItem;
