import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import browserHistory from 'helpers/browserHistory';

import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import Meta from 'components/ui/Meta';
import Like from 'components/ui/Like';

import { posts } from 'helpers/routes';

const BlogItem = ({ post, handleLike }) => (
  <div className='blog-item text-center'>
    <div className="row">
      <TextBox>
        {
          browserHistory.location.pathname == posts(post.id)
            ? <div>{post.text}</div>
            : <Link to={posts(post.id)}> {post.text} </Link>
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
      <Like {...{handleLike}} />
    </div>
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
