import { connect } from 'react-redux';

import BlogList from 'components/views/BlogList';
import { postsLike } from 'actions/posts';

import { POSTS_ON_PAGE } from 'constants/pagination';

function filterPostsByPage(posts, currentPage = 1) {
  const firstIndex = (currentPage - 1) * POSTS_ON_PAGE;
  const lastIndex = firstIndex + POSTS_ON_PAGE;

  return posts.slice(firstIndex, lastIndex);
}

const stateToProps = (state) => ({
  posts: filterPostsByPage(state.posts.entries, state.posts.currentPage),
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const actionsToProps = (dispatch) => ({
  handleLike(postId) {
    dispatch(postsLike(postId));
  }
});

export default connect(stateToProps, actionsToProps)(BlogList);