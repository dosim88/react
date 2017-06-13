import React from 'react';
import BlogList from '../ui/blogList.jsx';
import PieChart from '../ui/pieChart.jsx';

const posts = [
  {
    id: 0,
    image: {
      src: 'http://fotointeres.ru/wp-content/uploads/2016/09/0003a709_medium-720x479.jpg',
      alt: 'some alt text',
    },
    meta: {
      author: 'Иван Иванович',
      createdAt: '2017-06-01',
      updatedAt: '2017-06-01',
      likesCount: 5
    },
    text: 'post 1'
  },
  {
    id: 1,
    image: {
      src: 'http://www.vmersine.com/wp-content/uploads/2015/05/zabavnye_givotnye_dlya_horoshego_nastroeniya_foto_11-700x380.jpg',
      alt: 'some alt text',
    },
    meta: {
      author: "Григорий Григорьевич",
      createdAt: "2017-06-02",
      updatedAt: "2017-06-02",
      likesCount: 10
    },
    text: 'post 2'
  },
  {
    id: 2,
    image: {
      src: 'http://umm4.com/wp-content/uploads/2012/11/zhivotnye-evropy-1.jpg',
      alt: 'some alt text',
    },
    meta: {
      author: "Филипп Филиппович",
      createdAt: "2017-06-03",
      updatedAt: "2017-06-03",
      likesCount: 20
    },
    text: 'post 3'
  }
];

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
    )
  }
};

export default BlogPage;
