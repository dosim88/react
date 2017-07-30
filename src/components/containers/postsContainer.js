import { connect } from 'react-redux';

import BlogList from 'components/views/blogList';
import { postsLike, changePage } from 'actions/posts';

import { POSTS_ON_PAGE } from 'constants/pagination';

function filterPostsByPage(posts, currentPage = 1) {
  const firstIndex = (currentPage - 1) * POSTS_ON_PAGE;
  const lastIndex = firstIndex + POSTS_ON_PAGE;

  return posts.slice(firstIndex, lastIndex);
}

const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
  currentPage: state.posts.currentPage,
  postsOnPage: filterPostsByPage(state.posts.entries, state.posts.currentPage)
});

const actionsToProps = (dispatch) => ({
  handleLike(postId) {
    dispatch(postsLike(postId));
  },
  changePage(pageNumber) {
    dispatch(changePage(pageNumber));
  }
});

export default connect(stateToProps, actionsToProps)(BlogList);