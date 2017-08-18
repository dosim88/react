import { connect } from 'react-redux';

import Home from 'components/views/home/index';


const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});


export default connect(stateToProps)(Home);