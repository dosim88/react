import React, { PropTypes } from 'react';
import { bind } from 'lodash';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { search : '' };
    this.handleSearch = bind(this.handleSearch, this);
    this.onSubmit = bind(this.onSubmit, this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.search(this.state.search);
  }

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div className='search-form-container'>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              placeholder='Заголовок поста'
              value={this.state.search}
              onChange={this.handleSearch}
            />
            <button className='btn btn-primary' type='submit'>Поиск</button>
          </div>
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  search: PropTypes.func.isRequired
};


export default SearchForm;
