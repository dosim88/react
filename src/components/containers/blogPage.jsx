import React from 'react';

import BlogList from 'components/ui/blogList';
import PieChart from 'components/ui/pieChart';
import Pagination from 'components/ui/pagination';

import _ from 'lodash';
import request from 'superagent';

import { API_PATH } from 'constants/config';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postsOnPage: [],
      page: 1
    };
    this.handleLike = _.bind(this.handleLike, this);
    this.onChangePage = _.bind(this.onChangePage, this);
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

          this.setState({ posts });
        }
      });
  }

  onChangePage(pager) {
    this.setState({
      postsOnPage: pager.itemsOnPage,
      page: pager.page
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <BlogList posts={this.state.postsOnPage} handleLike={this.handleLike}/>
          <Pagination
            items={this.state.posts}
            onChangePage={this.onChangePage}
            currentPage={this.state.page}
          />
          <PieChart columns={this.state.posts.map(
            post => [ post.text, post.meta.likesCount ]
          )} />
        </div>
      </div>
    );
  }
}

export default BlogPage;
