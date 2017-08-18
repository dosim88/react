import { connect } from 'react-redux';

import Pagination from 'components/ui/Pagination';
import history from 'helpers/history';


function setPage(pageNumber) {
  history.push({pathname: `/pages/${pageNumber || 1}`});
}

const stateToProps = (state) => ({
  currentPage: state.posts.currentPage,
  totalPages: state.posts.totalPages
});

const actionsToProps = () => ({
  changePage(pageNumber) { setPage(pageNumber); }
});

export default connect(stateToProps, actionsToProps)(Pagination);