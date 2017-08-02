import React, { PropTypes } from 'react';
import { range } from 'lodash';

import { POSTS_ON_PAGE } from 'constants/pagination';

const Pagination = ({ items, currentPage, changePage }) => {
  const totalPages = Math.ceil(items.length / POSTS_ON_PAGE);
  const pages = range(1, totalPages + 1);

  if (!pages) return null;

  return (
    <div className="text-center">
      <ul className="pagination">
        <li className={currentPage === 1 ? 'disabled' : ''}>
          <a onClick={() => changePage(1)}>First</a>
        </li>
        <li className={currentPage === 1 ? 'disabled' : ''}>
          <a onClick={() => changePage(currentPage - 1)}>Previous</a>
        </li>
        {
          pages.map((page, index) =>
            <li key={index} className={currentPage === page ? 'active' : ''}>
              <a onClick={() => changePage(page)}>{page}</a>
            </li>
          )
        }
        <li className={currentPage === totalPages ? 'disabled' : ''}>
          <a onClick={() => changePage(currentPage + 1)}>Next</a>
        </li>
        <li className={currentPage === totalPages ? 'disabled' : ''}>
          <a onClick={() => changePage(totalPages)}>Last</a>
        </li>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  items: PropTypes.array,
  currentPage: PropTypes.number,
  changePage: PropTypes.func.isRequired
};

Pagination.defaultProps = {
  items: [],
  currentPage: 1
};


export default Pagination;
