import React, { PropTypes } from 'react';

const Like = ({ handleLike }) => (
  <div>
    {
      handleLike
        ? <button className='btn btn-primary' onClick={ () => handleLike() }>Like</button>
        : <button className='btn btn-basic'>Like</button>
    }
  </div>
);

Like.propTypes = {
  handleLike: PropTypes.func
};

export default Like;