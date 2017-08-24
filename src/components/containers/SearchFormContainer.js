import { connect } from 'react-redux';

import SearchForm from 'components/ui/SearchForm';
import history from 'helpers/history';

function searchRequest(searchText) {
  history.push({ pathname: '/search', search: `?title=${searchText}` });
}

const actionsToProps = () => ({
  search(searchText) { searchRequest(searchText); }
});

export default connect(null, actionsToProps)(SearchForm);