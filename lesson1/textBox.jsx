import React from 'react';

const DOM = React.DOM;

const TextBox = (props) => (
    DOM.span(null, props.children)
)

export default TextBox;