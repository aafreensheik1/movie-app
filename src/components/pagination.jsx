import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { totalCount, currentPage, pageSize, onPagination } = props;
  const numberOfPages = Math.ceil(totalCount / pageSize);

  const pagesArray = _.range(1, numberOfPages + 1);
  if (numberOfPages === 1) {
    return null;
  }
  return (
    <nav>
      <ul className="pagination pagination-md">
        {pagesArray.map(page => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
            style={{ cursor: "pointer" }}
          >
            <span className="page-link" onClick={() => onPagination(page)}>
              {page}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
