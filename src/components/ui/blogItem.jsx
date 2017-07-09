import React, { PropTypes } from 'react';
import Image from './image.jsx';
import TextBox from './textBox.jsx';
import Meta from './meta.jsx';
import Like from './like.jsx';

const BlogItem = ({ post, handleLike }) => (
  <div className='row blog-item text-center'>
    <Image {...post.image} />
    <TextBox>{post.text}</TextBox>
    <Meta {...post.meta} />
    <Like {...{handleLike}} />
  </div>
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
