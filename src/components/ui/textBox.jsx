import React, { PropTypes } from 'react';

const TextBox = (props) => (
  <p className='text-center'>
    <b>{props.children}</b>
  </p>
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