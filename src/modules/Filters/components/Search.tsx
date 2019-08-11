import React from 'react';

interface Props {
  onSearchInputChange: any;
  onSearchSubmit: any;
  searchQuery: string;
}

export const Search: React.FC<Props> = ({
  onSearchInputChange,
  onSearchSubmit,
  searchQuery
}) => {

  return (
    <form onSubmit={onSearchSubmit}>
      <input type="search" value={searchQuery} onChange={onSearchInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
