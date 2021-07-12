import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Paginate = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Pagination>
        {pageNumbers.map(number => (
          <Pagination.Item
            key={number}
            onClick={() => paginate(number)}
            active={currentPage === number}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </nav>
  );
};

export default Paginate;
