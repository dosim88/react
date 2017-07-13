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
    request.get(
      API_PATH,
      {},
      (err, res) => this.setState({ posts: res.body })
    );
  }

  handleLike(postId) {
    const posts = _.cloneDeep(this.state.posts);
    const index = _.findIndex(posts, post => post.id == postId);

    posts[index].meta.likesCount++;

    this.setState({ posts });
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
