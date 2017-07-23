import React, { PropTypes } from 'react';
import BlogItem from 'components/ui/blogItem';

import _ from 'lodash';
import request from 'superagent';

import { API_PATH } from 'constants/config';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: null };
    this.handleLike = _.bind(this.handleLike, this);
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost() {
    const { id } = this.props.match.params;

    request
      .get(`${API_PATH}/posts/${id}`)
      .end((err, res) => {
        if (!err && res.ok)
          this.setState({ post: res.body });
      });
  }

  handleLike(postId) {
    request
      .put(`${API_PATH}/posts/${postId}/like`)
      .end((err, res) => {
        if (!err && res.ok)
          this.setState({ post: res.body });
      });
  }

  render() {
    const { id } = this.props.match.params;
    const { post } = this.state;

    //return {post && <BlogItem key={id} post={post} handleLike={ () => this.handleLike(id) }/>}

    return post
      ? <BlogItem key={id} post={post} handleLike={ () => this.handleLike(id) }/>
      : null;
  }
}

Post.propTypes = {
  match: PropTypes.object
};

export default Post;