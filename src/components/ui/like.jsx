import React, { DOM, PropTypes } from 'react';

const Like = ({ postId, likesCount, handleLike }) => (
    DOM.div(
        null,
        React.createElement(
            'button',
            { onClick: () => handleLike(postId) },
            'Like'
        ),
        DOM.div(
            null,
            DOM.span(null, `Likes: ${likesCount}`)
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