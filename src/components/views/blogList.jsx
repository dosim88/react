import React, { PropTypes } from 'react';
import { map } from 'lodash';

import BlogItem from 'components/views/blogItem';
import PieChart from 'components/ui/pieChart';
import Pagination from 'components/ui/pagination';

const BlogList = ({ posts, postsOnPage, currentPage, changePage, handleLike }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        {
          map(postsOnPage, (post) => (
            <BlogItem
              key={post.id}
              post={post}
              handleLike={ () => handleLike(post.id, posts) }
            />
          ))
        }

        <Pagination items={posts} currentPage={currentPage} changePage={changePage}/>
      </div>

      <div className="col-md-6">
        <PieChart columns={
          posts.map(
            post => [ post.text, post.meta.likesCount ]
          )}
        />
      </div>

    </div>
  </div>
);

BlogList.propTypes = {
  posts: PropTypes.array,
  postsOnPage: PropTypes.array,
  currentPage: PropTypes.number,
  changePage: PropTypes.func,
  handleLike: PropTypes.func
};

export default BlogList;