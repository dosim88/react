import React, { DOM, PropTypes } from 'react';

const TextBox = (props) => (
  DOM.span(null, props.children)
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