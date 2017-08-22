import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import Meta from 'components/ui/Meta';
import LikeContainer from 'components/containers/LikeContainer';

import { posts, postEdit } from 'helpers/routes';

const BlogItem = ({ post }) => (
  <div className='blog-item text-center'>
    <div className="row">
      <TextBox>
        <Link to={posts(post.id)}>{post.title}</Link>
      </TextBox>
    </div>

    <div className="row">
      <div className="col-md-6">
        <Image {...post.image} />
      </div>

      <div className="col-md-6">
        <Meta {...post.meta} />
      </div>
    </div>

    <div className="row">
      <LikeContainer postId={post.id} />
      <Link to={postEdit(post.id)}>Edit</Link>
    </div>
  </div>
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    image:  PropTypes.shape(Image.propTypes),
    meta: PropTypes.shape(Meta.propTypes),
    title: PropTypes.string,
    id: PropTypes.number
  })
};

BlogItem.defaultProps = {
  post: {}
};

export default BlogItem;
