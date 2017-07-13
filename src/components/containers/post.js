import React, { PropTypes } from 'react';
import BlogItem from 'components/ui/blogItem';
import request from 'superagent';
import { API_PATH } from 'constants/config';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: null };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    const { id } = this.props.match.params;

    request.get(
      `${API_PATH}/posts/${id}`,
      {},
      (err, res) => {
        if(!err)
          this.setState({post: res.body});
      }
    );
  }

  render() {
    const { id } = this.props.match.params;
    const { post } = this.state;

    return post
      ? <BlogItem key={id} post={post} />
      : null;
  }
}

Post.propTypes = {
  match: PropTypes.object
};

export default Post;