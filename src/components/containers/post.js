import React, { PropTypes } from 'react';
import BlogItem from '../ui/blogItem.jsx';
import request from 'superagent';
import { API_PATH } from '../../constants/config.js';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      API_PATH,
      {},
      (err, res) => (
        this.setState({ posts: res.body })
      )
    );
  }

  render() {
    const { posts } = this.state;
    const { id } = this.props.match.params;

    if (posts.length == 0 || !posts[id])
      return false;

    return (
      <BlogItem key={id} post={posts[id]} />
    );
  }
}

Post.propTypes = {
  match: PropTypes.object
};

export default Post;