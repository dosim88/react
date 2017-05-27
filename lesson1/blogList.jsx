import React from 'react';
import BlogItem from './blogItem.jsx';

const DOM = React.DOM;

const BlogList = ({posts}) => (
    DOM.div(
        null,
        _.map(
            posts,
            (post, key) => (
                React.createElement(BlogItem, {post: post, key: key})
            )
        )
    )
)

export default BlogList;