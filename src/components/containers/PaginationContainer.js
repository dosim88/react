import { connect } from 'react-redux';

import Pagination from 'components/ui/Pagination';
import { changePage } from 'actions/posts';


const stateToProps = (state) => ({
  count: state.posts.entries.length,
  currentPage: state.posts.currentPage
});

const actionsToProps = (dispatch) => ({
  changePage(pageNumber) {
    dispatch(changePage(pageNumber));
  }
});

export default connect(stateToProps, actionsToProps)(Pagination);