import React from 'react';
import Image from './image.jsx'
import TextBox from './textBox.jsx'

const DOM = React.DOM;

const BlogItem = ({post}) => (
    DOM.div(
        null,
        React.createElement(Image, post),
        React.createElement('br'),
        React.createElement(TextBox, null, post.text)
    )
)

export default BlogItem;
