import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FILTERS_TYPES } from 'modules/Filters/redux/types';

const ITEMS_PER_PAGE = 24;
const PAGES_MAX = 5;

export const Pagination = ({ count, currentPage }: any) => {
  console.log('COUNT', count);
  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
  const dispatch = useDispatch();
  const currentPageNumber = parseInt(currentPage);
  const isMaxCount = count >= PAGES_MAX;

  const handlePageClick = useCallback((event: any) => {
    const { value } = event.currentTarget;
    dispatch({
      type: FILTERS_TYPES.FILTERS_ADD,
      payload: { key: 'currentPage', data: value || 1 }
    });
  }, []);

  if (totalPages <= 1) return null;

  if (isMaxCount)
    return (
      <div className="pagination">
        {[...new Array(PAGES_MAX)].map((_, index) => (
          <button
            className="pagination__button"
            onClick={handlePageClick}
            value={index + 1}
            key={`page-${index}`}
            disabled={currentPageNumber === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );

  return (
    <div className="pagination">
      {[...new Array(count)].map((_, index) => (
        <button
          className="pagination__button"
          onClick={handlePageClick}
          value={index + 1}
          key={`page-${index}`}
          disabled={currentPageNumber === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
