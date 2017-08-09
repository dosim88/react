import { connect } from 'react-redux';

import Post from 'components/views/post/index';

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});


export default connect(stateToProps)(Post);