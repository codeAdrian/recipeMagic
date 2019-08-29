import React, { useState } from 'react';

const ITEMS_PER_PAGE = 24;
const RANGE_LARGE = 5;
const RANGE_SMALL = 3;

export const Pagination = ({ count, more, from, to }: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

  if (totalPages <= 1) return null;

  if (totalPages < RANGE_LARGE)
    return (
      <div>
        {[...new Array(totalPages)].map((_, index) => (
          <button value={index + 1} key={`page-${index}`}>
            {index + 1}
          </button>
        ))}
      </div>
    );

  return (
    <div>
      {[...new Array(RANGE_LARGE)].map((_, index) => (
        <button value={currentPage + index} key={`page-${index}`}>
          {index + currentPage}
        </button>
      ))}
    </div>
  );
};
