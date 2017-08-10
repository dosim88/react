import React, { PropTypes } from 'react';

import BlogItem from 'components/views/BlogItem';

import Helmet from 'react-helmet';

const Post = ({ post }) => (
  <div>
    { post &&
      <Helmet
        title={post.text}
        meta={[
          { name: 'description', content: post.text },
          { name: 'keywords', content: post.text }
        ]}
      />
    }
    {
      post
        ? <BlogItem key={post.id} post={post}/>
        : null
    }
  </div>
);


Post.propTypes = {
  post: PropTypes.object,
  handleLike: PropTypes.func
};

export default Post;