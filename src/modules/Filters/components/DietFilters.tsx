import React, { useState } from 'react';
import { dietLabels } from '../constants';
import { FILTERS_TYPES } from 'modules/Filters/redux/types';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faDotCircle,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import { Toggleable } from 'components';

export const DietFilters = () => {
  const selectedLabels = useSelector((state: any) => state.filters.dietLabels);
  const [filter, setFilters] = useState<string>(selectedLabels || '');
  const dispatch = useDispatch();

  const handleInputChange = (event: any) => {
    const { value }: { value: string } =
      event.currentTarget || event.srcElement;
    setFilters(value || '');
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch({
      type: FILTERS_TYPES.FILTERS_ADD,
      payload: { key: 'dietLabels', data: filter || '' }
    });
  };

  const handleReset = (event: any) => {
    event.preventDefault();
    setFilters('');
    dispatch({
      type: FILTERS_TYPES.FILTERS_ADD,
      payload: { key: 'dietLabels', data: '' }
    });
  };

  return (
    <Toggleable
      title={
        <>
          {filter.length > 0 && <FontAwesomeIcon icon={faCheck} />} Diet labels
        </>
      }
    >
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="controls">
          {dietLabels.map(({ label, value, description }) => (
            <div key={value}>
              <input
                className="input input--radio"
                name="filter-diet-label"
                onChange={handleInputChange}
                id={value}
                type="radio"
                value={value}
                checked={filter.indexOf(value) > -1}
                defaultChecked={selectedLabels.indexOf(value) > -1}
              />
              <label htmlFor={value}>
                <FontAwesomeIcon icon={faCircle} />
                <FontAwesomeIcon icon={faDotCircle} />
                {label}
                <br />
                <small className="color--gray--light">{description}</small>
              </label>
            </div>
          ))}
        </div>

        <button
          className="button button--control button--regular button--cta"
          type="submit"
        >
          Apply Labels
        </button>

        <button
          className="button button--control button--regular button--primary"
          type="reset"
        >
          Clear
        </button>
      </form>
    </Toggleable>
  );
};
