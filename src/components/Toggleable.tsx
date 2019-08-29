import * as React from 'react';
import { useDropdown } from 'hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export const Toggleable = ({ children, title }: any) => {
  const { elementRef, expanded, setExpanded } = useDropdown();

  const handleToggleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div ref={elementRef} className="toggleable">
      <button
        className={`button--secondary toggleable__button ${
          expanded ? 'toggleable__button--active' : ''
        }`}
        onClick={handleToggleClick}
      >
        <span className="button__label">{title}</span>
        {expanded ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>
      <div
        className={`toggleable__content ${
          expanded ? 'toggleable__content--active' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};
