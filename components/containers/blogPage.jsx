import React from 'react';
import BlogList from '../ui/blogList.jsx';

const posts = [
    {
        id: 0,
        image: {
            src: 'http://fotointeres.ru/wp-content/uploads/2016/09/0003a709_medium-720x479.jpg',
            alt: 'some alt text',
        },
        meta: {
            author: 'Иван Иванович',
            created_at: '2017-06-01',
            updated_at: '2017-06-01',
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
            created_at: "2017-06-02",
            updated_at: "2017-06-02",
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
            created_at: "2017-06-03",
            updated_at: "2017-06-03",
            likesCount: 20
        },
        text: 'some text'
    }
];

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts };
    }

    render() {
        const posts = this.state.posts;
        return React.createElement(BlogList, { posts })
    }
}

export default BlogPage;