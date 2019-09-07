import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FILTERS_TYPES } from 'modules/Filters/redux/types';

const ITEMS_PER_PAGE = 24;
const PAGES_MAX = 5;

export const Pagination = ({ count, currentPage }: any) => {
  const isTimerActive = useSelector((state: any) => state.apiTimer.isActive);
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
      <div className="pagination container container--withPadding">
        {[...new Array(PAGES_MAX)].map((_, index) => (
          <button
            className={`pagination__button ${
              currentPageNumber === index + 1
                ? 'pagination__button--current'
                : ''
            }`}
            onClick={handlePageClick}
            value={index + 1}
            key={`page-${index}`}
            disabled={isTimerActive}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );

  return (
    <div className="pagination container container--withPadding">
      {[...new Array(count)].map((_, index) => (
        <button
          className={`pagination__button ${
            currentPageNumber === index + 1 ? 'pagination__button--current' : ''
          }`}
          onClick={handlePageClick}
          value={index + 1}
          key={`page-${index}`}
          disabled={isTimerActive}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
