import React from 'react';

import PostCreateForm from 'components/views/postCreate/PostCreateForm';

const PostCreate = (props) => (
  <div>
    <h3>Создание поста</h3>
    <PostCreateForm {...props} />
  </div>
);


export default PostCreate;