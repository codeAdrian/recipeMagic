import React, { useCallback } from 'react';
import { RecipeList, Search, Ingredients, HealthFilters, DietFilters } from 'modules';
import { FILTERS_TYPES } from 'modules/Filters/redux/types';
import { useDispatch } from 'react-redux';
import { useEdamam, useSearch } from 'hooks';

export const RecipeListPage = () => {
  const [{ getRecipeList }] = useEdamam();
  const dispatch = useDispatch();

  const handleSearchSubmit = useCallback((query: string) => {
    dispatch({
      type: FILTERS_TYPES.FILTERS_ADD,
      payload: { key: "searchQuery", data: query || "popular" }
    })
    console.log('Query', query);
  }, []);

  const [state, api] = useSearch('', handleSearchSubmit);

  return (
    <div>
      Recipe list page
      <Search {...state} {...api} />
      <Ingredients />
      <HealthFilters />
      <DietFilters />
      <RecipeList {...state} getRecipeList={getRecipeList} />
    </div>
  );
};
