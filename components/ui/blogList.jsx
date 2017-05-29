import React, { DOM } from 'react';
import _ from 'lodash';

import BlogItem from './blogItem.jsx';

const BlogList = ({ posts }) => (
    DOM.div(
        null,
        _.map(
            posts,
            (post) => {
                return React.createElement(BlogItem, {key: post.id, post: post})
            }
        )
    )
)

export default BlogList;