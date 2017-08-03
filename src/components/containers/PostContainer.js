import { connect } from 'react-redux';

import Post from 'components/views/Post';
import { postLike } from 'actions/like';

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