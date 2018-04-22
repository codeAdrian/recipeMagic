import React from 'react';

const Toolbar = ({ handlePageChange, page, totalPages }) => (
    <div className="toolbar">
        <button
            className="button"
            value={-1}
            onClick={handlePageChange}
            disabled={page === 0 ? 'disabled' : false}
        >
            <i class="fas fa-chevron-left" />
            Previous Page
        </button>

        <div className="toolbar__amount">{`Page ${page +
            1} of ${totalPages}`}</div>

        <button
            className="button"
            value={1}
            onClick={handlePageChange}
            disabled={page + 1 === totalPages ? 'disabled' : false}
        >
            Next Page
            <i class="fas fa-chevron-right" />
        </button>
    </div>
);

export default Toolbar;
