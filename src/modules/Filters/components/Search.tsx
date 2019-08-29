import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
    <form className="inputWrapper--withButton" onSubmit={onSearchSubmit}>
      <input
        className="input input--field"
        type="search"
        value={searchQuery}
        onChange={onSearchInputChange}
        placeholder="Recipe Search"
      />
      <button
        className="button button--regular button--cta button--icon"
        type="submit"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};
