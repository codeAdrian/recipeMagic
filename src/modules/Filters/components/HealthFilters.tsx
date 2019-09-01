import React, { useState } from 'react';
import { healthLabels } from '../constants';
import { FILTERS_TYPES } from 'modules/Filters/redux/types';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquare,
  faCheckSquare,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import { Toggleable } from 'components';

export const HealthFilters = () => {
  const selectedLabels = useSelector(
    (state: any) => state.filters.healthLabels
  );
  const [filters, setFilters] = useState<string[]>(selectedLabels || []);
  const dispatch = useDispatch();

  const handleInputChange = (event: any) => {
    const { value }: { value: string } =
      event.currentTarget || event.srcElement;
    const checked = filters.indexOf(value) > -1;
    if (checked) {
      setFilters([...filters].filter(item => item !== value));
    } else {
      setFilters([...filters, value]);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch({
      type: FILTERS_TYPES.FILTERS_ADD,
      payload: { key: 'healthLabels', data: filters || [] }
    });
  };

  const handleReset = (event: any) => {
    event.preventDefault();
    dispatch({
      type: FILTERS_TYPES.FILTERS_ADD,
      payload: { key: 'healthLabels', data: [] }
    });
    setFilters([]);
  };

  return (
    <Toggleable
      title={
        <>
          {selectedLabels.length > 0 && <FontAwesomeIcon icon={faCheck} />}{' '}
          Health labels
        </>
      }
    >
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="controls">
          {healthLabels.map(({ label, value, description }) => (
            <div key={value}>
              <input
                className="input input--checkbox"
                onChange={handleInputChange}
                id={value}
                type="checkbox"
                value={value}
                checked={filters.indexOf(value) > -1}
                defaultChecked={selectedLabels.indexOf(value) > -1}
              />
              <label htmlFor={value}>
                <FontAwesomeIcon icon={faSquare} />
                <FontAwesomeIcon icon={faCheckSquare} />
                {label}
                <br />
                <small className="color--gray--light">{description}</small>
              </label>
            </div>
          ))}
        </div>

        <button
          className="button button--control  button--regular button--cta"
          type="submit"
        >
          Apply Labels
        </button>

        <button
          className="button button--control  button--regular button--primary"
          type="reset"
        >
          Clear
        </button>
      </form>
    </Toggleable>
  );
};
