import React, { PropTypes } from 'react';
import _ from 'lodash';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.pager = {};
  }

  setPage(page) {
    const items = this.props.items;
    let pager = this.pager;

    if (page < 1 || page > pager.totalPages) return;

    // get new pager object for specified page
    pager = this.getPager(items.length, page, 3);

    // get new page of items from items array
    pager.itemsOnPage = items.slice(pager.startIndex, pager.endIndex + 1);
    pager.page = page;

    return pager;
  }

  getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 10;

    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = _.range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }

  render() {
    const pager = this.setPage(this.props.currentPage);

    if (!pager.pages) return null;

    return (
      <div className="text-center">
        <ul className="pagination">
          <li className={pager.currentPage === 1 ? 'disabled' : ''}>
            <a onClick={() => this.props.changePage(1)}>First</a>
          </li>
          <li className={pager.currentPage === 1 ? 'disabled' : ''}>
            <a onClick={() => this.props.changePage(pager.currentPage - 1)}>Previous</a>
          </li>
          {
            pager.pages.map((page, index) =>
              <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                <a onClick={() => this.props.changePage(page)}>{page}</a>
              </li>
            )
          }
          <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
            <a onClick={() => this.props.changePage(pager.currentPage + 1)}>Next</a>
          </li>
          <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
            <a onClick={() => this.props.changePage(pager.totalPages)}>Last</a>
          </li>
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  //items: PropTypes.array.isRequired,
  //onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  currentPage: PropTypes.number
};

Pagination.defaultProps = {
  currentPage: 1,
};


export default Pagination;
