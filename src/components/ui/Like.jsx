import React, { PropTypes } from 'react';

const Like = ({ handleLike }) => (
  <div>
    <button className='btn btn-primary' onClick={ () => handleLike() }>Like</button>
  </div>
);

Like.propTypes = {
  handleLike: PropTypes.func
};

export default Like;