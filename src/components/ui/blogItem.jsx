import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import Image from 'components/ui/image';
import TextBox from 'components/ui/textBox';
import Meta from 'components/ui/meta';
import Like from 'components/ui/like';

import { posts } from 'helpers/routes';

const BlogItem = ({ post, handleLike }) => (
  <div className='row blog-item text-center'>
    <Image {...post.image} />
    <TextBox>
      <Link to={posts(post.id)}>{post.text}</Link>
    </TextBox>
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
