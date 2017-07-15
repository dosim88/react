import React from 'react';

import BlogList from '../ui/blogList.jsx';
import PieChart from '../ui/pieChart.jsx';

import _ from 'lodash';
import request from 'superagent';

import { API_PATH } from 'constants/config';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.handleLike = _.bind(this.handleLike, this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request
      .get(API_PATH)
      .end((err, res) => {
        if (!err && res.ok)
          this.setState({ posts: res.body });
      });
  }

  handleLike(postId) {
    request
      .put(`${API_PATH}/posts/${postId}/like`)
      .end((err, res) => {
        if (!err && res.ok) {
          const posts = _.cloneDeep(this.state.posts);
          const index = _.findIndex(posts, post => post.id == postId);

          posts[index] = res.body;

          this.setState({ posts: posts });
        }
      });
  }

  render() {
    return (
      <div className="container">
        <div>
          <BlogList posts={this.state.posts} handleLike={this.handleLike}/>
          <PieChart columns={this.state.posts.map(
            post => [ post.text, post.meta.likesCount ]
          )} />
        </div>
      </div>
    );
  }
}

export default BlogPage;
