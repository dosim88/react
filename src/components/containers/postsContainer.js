import { connect } from 'react-redux';

import BlogList from 'components/views/blogList';
import { postsLike } from 'actions/posts';

const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const actionsToProps = (dispatch) => ({
  handleLike(postId) {
    dispatch(postsLike(postId));
  }
});

export default connect(stateToProps, actionsToProps)(BlogList);