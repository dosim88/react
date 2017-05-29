const DOM = React.DOM;

const posts = [
    {
        id: 0,
        src: 'http://fotointeres.ru/wp-content/uploads/2016/09/0003a709_medium-720x479.jpg',
        text: 'Уникальная подпись к первой картинке'
    },
    {
        id: 1,
        src: 'http://www.vmersine.com/wp-content/uploads/2015/05/zabavnye_givotnye_dlya_horoshego_nastroeniya_foto_11-700x380.jpg',
        text: 'Уникальная подпись ко второй картинке'
    },
    {
        id: 2,
        src: 'http://umm4.com/wp-content/uploads/2012/11/zhivotnye-evropy-1.jpg',
        text: 'Уникальная подпись к третьей картинке'
    }
];

const Image = (props) => (
    DOM.img({
        src: props.src,
        alt: props.text,
        style: {
            width: 150,
            height: 100
        }
    })
)

const TextBox = (props) => (
    DOM.span(null, props.children)
)

const BlogItem = ({ post }) => (
    DOM.div(
        null,
        React.createElement(Image, post),
        React.createElement('br'),
        React.createElement(TextBox, null, post.text)
    )
)

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
)

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts }
    }

    render() {
        const posts = this.state.posts;
        return React.createElement(BlogList, { posts })
    }
}

ReactDOM.render(
    React.createElement(BlogPage),
    document.getElementById('app')
);