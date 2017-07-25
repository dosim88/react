import { connect } from 'react-redux';

import Post from 'components/views/post';
import { postLike } from 'actions/post';

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

const actionsToProps = (dispatch) => ({
  handleLike(postId) {
    dispatch(postLike(postId));
  }
});

export default connect(stateToProps, actionsToProps)(Post);