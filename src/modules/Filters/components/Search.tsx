import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

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
  const isTimerActive = useSelector((state: any) => state.apiTimer.isActive);

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
        disabled={isTimerActive}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};
