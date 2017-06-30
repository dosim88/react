import React from 'react';
import BlogList from '../ui/blogList.jsx';
import PieChart from '../ui/pieChart.jsx';
import { posts } from '../constants/items';
import _ from 'lodash';

const { DOM } = React;

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
    this.handleLike = _.bind(this.handleLike, this);
  }

  handleLike(postId) {
    const posts = _.cloneDeep(this.state.posts);
    const index = _.findIndex(posts, post => post.id == postId);

    posts[index].meta.likesCount++;

    this.setState({ posts: posts });
  }

  render() {
    return (
      DOM.div(
        {
          className: 'container'
        },
        DOM.div(
          null,
          React.createElement(BlogList, {
            posts: this.state.posts,
            handleLike: this.handleLike
          }),
          React.createElement(PieChart, {
            columns: this.state.posts.map( post => [ post.text, post.meta.likesCount ] )
          })
        )
      )
    );
  }
}

export default BlogPage;
