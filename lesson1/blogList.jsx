import React, { DOM } from 'react';
import _ from 'lodash';

import BlogItem from './blogItem.jsx';

const BlogList = ({ posts }) => (
    DOM.div(
        null,
        _.map(
            posts,
            (post, key) => (
                React.createElement(BlogItem, {key: key, post: post})
            )
        )
    )
)

export default BlogList;