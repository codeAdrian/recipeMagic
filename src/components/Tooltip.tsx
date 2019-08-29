import * as React from 'react';
import { useDropdown } from 'hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export const Tooltip = ({ children }: any) => {
  const { elementRef, expanded, setExpanded } = useDropdown();

  const handleToggleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div ref={elementRef} className="dropdown">
      <button
        className={`dropdown__button ${
          expanded ? 'dropdown__button--active' : ''
        }`}
        onClick={handleToggleClick}
      >
        <FontAwesomeIcon icon={faInfoCircle} />
      </button>
      <div
        className={`dropdown__content ${
          expanded ? 'dropdown__content--active' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};
