import React from 'react';
import BlogList from '../ui/blogList.jsx';
import PieChart from '../ui/pieChart.jsx';
import { posts } from '../constants/items';

const { DOM } = React;

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(postId) {
    const index = this.state.posts.findIndex(post => post.id == postId);
    const posts = JSON.parse(JSON.stringify(this.state.posts)); //clone of state.posts

    posts[index].meta.likesCount++;

    this.setState({ posts: posts });
  }

  render() {
    return (
      DOM.div(
        null,
        React.createElement(BlogList, { posts: this.state.posts, handleLike: this.handleLike }),
        React.createElement(PieChart, {columns: this.state.posts.map( post => [ post.text, post.meta.likesCount ] )})
      )
    );
  }
}

export default BlogPage;
