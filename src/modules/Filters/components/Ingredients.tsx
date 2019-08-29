import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FILTERS_TYPES } from 'modules/Filters/redux/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Toggleable } from 'components';

export const Ingredients = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state: any) => state.filters.ingredients);
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = useCallback(
    (event: any) => {
      const { value } = event.currentTarget || event.srcElement;
      setInputValue(value);
    },
    [setInputValue]
  );

  const handleRemove = useCallback(
    event => {
      const { value } = event.currentTarget || event.srcElement;
      const newValues = ingredients.filter(
        (ingredient: string) => ingredient !== value
      );
      dispatch({
        type: FILTERS_TYPES.FILTERS_ADD,
        payload: { key: 'ingredients', data: newValues }
      });
    },
    [ingredients]
  );

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      dispatch({
        type: FILTERS_TYPES.FILTERS_ADD,
        payload: { key: 'ingredients', data: [...ingredients, inputValue] }
      });
      setInputValue('');
    },
    [ingredients, inputValue]
  );
  return (
    <Toggleable title="Ingredients">
      <form
        className="inputWrapper--withButton inputWrapper--fullWidth"
        onSubmit={handleSubmit}
      >
        <input
          className="input input--field"
          onChange={handleInputChange}
          value={inputValue}
          id="input-ingredients"
          placeholder="Ingredients"
          type="text"
        />
        <button
          className="button button--regular button--cta button--icon"
          type="submit"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
      <div>
        {ingredients.map((ingredient: string, key: number) => (
          <button
            className="button button--inline button--withIcon button--small button--primary"
            value={ingredient}
            onClick={handleRemove}
            key={key}
          >
            <FontAwesomeIcon icon={faTimes} />
            {ingredient}
          </button>
        ))}
      </div>
    </Toggleable>
  );
};
