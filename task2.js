const DOM = React.DOM;
const PropTypes = React.PropTypes;

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
    text: 'some text'
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
    text: 'some text'
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
    text: 'some text'
  }
];

/* Image */
const Image = (props) => (
  DOM.img({
    src: props.src,
    alt: props.text,
    style: props.style
  })
);

Image.defaultProps = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/%D0%9D%D0%B5%D1%82_%D1%84%D0%BE%D1%82%D0%BE.png',
  alt: '',
  style: {
    width: 300,
    height: 200
  }
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  })
};
/* /Image */

/* TextBox */
const TextBox = (props) => (
  DOM.span(null, props.children)
);

TextBox.defaultProps = {
  children: ''
};

TextBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ])
};
/* /TextBox */

/* Meta */
const Meta = ({author, createdAt, updatedAt}) => (
  DOM.span(
    null,
    `${author} Создано: ${createdAt} Обновлено: ${updatedAt}`
  )
);

Meta.defaultProps = {
  author: '',
  createdAt: '',
  updatedAt: ''
};

Meta.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};
/* /Meta */

/* Like */
class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: props.count };
  }

  render() {
    return DOM.div(
      null,
      React.createElement(
        'button',
        {
          onClick: () => (
              this.setState({ count: ++this.state.count })
          )
        },
        'Like'
      ),
      DOM.div(
        null,
        DOM.span(null, `Likes: ${this.state.count}`)
      )
    )
  }
};

Like.defaultProps = {
  count: 0
};

Like.propTypes = {
  count: PropTypes.number
};
/* /Like */

/* BlogItem */
const BlogItem = ({ post }) => {
  return DOM.div(
    null,
    React.createElement(Image, post.image),
    React.createElement('br'),
    React.createElement(Meta, post.meta),
    React.createElement('br'),
    React.createElement(TextBox, null, post.text),
    React.createElement(Like, { count: post.meta.likesCount })
  )
};

BlogItem.propTypes = {
  post: PropTypes.shape({
    image:  PropTypes.shape( Image.propTypes ),
    meta: PropTypes.shape( Meta.propTypes ),
    text: PropTypes.string
  })
};
/* /BlogItem */

/* BlogList */
const BlogList = ({ posts }) => (
  DOM.div(
    null,
    _.map(
      posts,
      (post) => {
        return React.createElement(BlogItem, {key: post.id, post: post})
      }
    )
  )
);

BlogList.propTypes = {
  posts: PropTypes.array
};
/* /BlogList */

/* BlogPage */
class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts }
  }

  render() {
    const posts = this.state.posts;
    return React.createElement(BlogList, { posts })
  }
};
/* /BlogPage */

ReactDOM.render(
  React.createElement(BlogPage),
  document.getElementById('app')
);