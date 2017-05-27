import React from 'react';

const DOM = React.DOM;

const Image = (props) => (
    DOM.img({
        src: props.src,
        alt: props.text,
        style: {
            width: 150,
            height: 100
        }
    })
)

export default Image;