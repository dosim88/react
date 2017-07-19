import React, { PropTypes } from 'react';

const TextBox = (props) => (
  <div className='post-title text-center'>
    <b>{props.children}</b>
  </div>
);

TextBox.defaultProps = {
  children: ''
};

TextBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ])
};

export default TextBox;