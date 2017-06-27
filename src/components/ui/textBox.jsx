import React, { DOM, PropTypes } from 'react';

const TextBox = (props) => (
  DOM.p({ className: 'text-center' }, <b>{props.children}</b>)
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