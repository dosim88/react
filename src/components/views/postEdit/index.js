import React from 'react';

import PostEditForm from 'components/views/postEdit/PostEditForm';

const PostEdit = (props) => (
  <div>
    <h3>Post Edit</h3>
    <PostEditForm {...props} />
  </div>
);


export default PostEdit;
