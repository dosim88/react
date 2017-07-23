import { connect } from 'react-redux';

import Post from 'components/containers/post';

const stateToProps = (state) => ({
  items: state.post.entry,
  isFetching: state.posts.isFetching,
  error: state.post.error
});

export default connect(stateToProps)(Post);