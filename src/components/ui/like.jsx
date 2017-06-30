import React, { DOM, PropTypes } from 'react';

const Like = ({ handleLike }) => (
  DOM.div(
    null,
    React.createElement(
      'button',
      {
        className: 'btn btn-primary',
        onClick: () => handleLike()
      },
      'Like'
    )
  )
);

Like.propTypes = {
  handleLike: PropTypes.func.isRequired
};

export default Like;