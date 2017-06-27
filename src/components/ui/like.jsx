import React, { DOM, PropTypes } from 'react';

const Like = ({ postId, handleLike }) => (
  DOM.div(
    null,
    React.createElement(
      'button',
      {
        className: 'btn btn-primary',
        onClick: () => handleLike(postId)
      },
      'Like'
    )
  )
);

Like.defaultProps = {
  count: 0,
  likesCount: 0
};

Like.propTypes = {
  count: PropTypes.number,
  likesCount: PropTypes.number,
  handleLike: PropTypes.func.isRequired
};

export default Like;