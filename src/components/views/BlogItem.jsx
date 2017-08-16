import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import history from 'helpers/history';

import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import Meta from 'components/ui/Meta';
import LikeContainer from 'components/containers/LikeContainer';

import { posts } from 'helpers/routes';

const BlogItem = ({ post }) => (
  <div className='blog-item text-center'>
    <div className="row">
      <TextBox>
        {
          history.location.pathname == posts(post.id)
            ? <div>{post.title}</div>
            : <Link to={posts(post.id)}> {post.title} </Link>
        }
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

export default BlogItem;
