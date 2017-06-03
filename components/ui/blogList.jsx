import React, { DOM } from 'react';
import _ from 'lodash';

import BlogItem from './blogItem.jsx';

const BlogList = ({ posts }) => {
    return DOM.div(
        null,
        _.map(
            posts,
            (post) => {
                return React.createElement(BlogItem, {key: post.id, post: post})
            }
        )
    )
}

BlogList.propTypes = {
    posts: PropTypes.array
}

export default BlogList;