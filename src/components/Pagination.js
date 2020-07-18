import React from 'react';

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '16px',
      }}>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Prev</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  );
}
