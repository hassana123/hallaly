import React from "react";
const pageNumbers = [];
const Pagination = ({ userPerPage, totalUsers, paginate }) => {
  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <nav className="pagination">
        <ul className="pages">
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                href="!#"
                onClick={(e) => {
                  e.preventDefault();
                  paginate(number);
                }}
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
