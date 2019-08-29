import React, { useCallback, useLayoutEffect } from 'react';
import anime from 'animejs';
import {
  RecipeList,
  Search,
  Ingredients,
  HealthFilters,
  DietFilters
} from 'modules';
import { FILTERS_TYPES } from 'modules/Filters/redux/types';
import { useDispatch, useSelector } from 'react-redux';
import { useEdamam, useSearch } from 'hooks';
import { RecipeCategories } from 'components';

export const RecipeListPage = () => {
  const [{ getRecipeList }] = useEdamam();
  const dispatch = useDispatch();
  const fadeIn = () => {
    const fadeIn = anime.timeline();
    fadeIn.add({
      targets: '.main',
      opacity: [0, 1],
      duration: 300,
      easing: 'easeInQuad'
    });
  };

  useLayoutEffect(() => {
    fadeIn();
  }, []);

  const handleSearchSubmit = useCallback((query: string) => {
    dispatch({
      type: FILTERS_TYPES.FILTERS_ADD,
      payload: { key: 'searchQuery', data: query || '' }
    });
  }, []);

  const currentQuery = useSelector((state: any) => state.filters.searchQuery);
  const recipes = useSelector((state: any) => state.recipes);
  const filters = useSelector((state: any) => state.filters);

  const { hits } = recipes;

  const { searchQuery, ingredients, healthLabels, dietLabels } = filters;

  const isInitialLoad =
    hits.length === 0 &&
    !searchQuery &&
    !dietLabels &&
    ingredients.length === 0 &&
    healthLabels.length === 0;

  const [state, api] = useSearch(currentQuery, handleSearchSubmit);

  console.log('STATE', { state, currentQuery });

  return (
    <div className="container--withPadding container">
      {isInitialLoad ? (
        <RecipeCategories />
      ) : (
        <>
          <aside className="filters">
            <div className="filters__group">
              <Ingredients />
              <HealthFilters />
              <DietFilters />
            </div>
            <Search currentQuery={currentQuery} {...state} {...api} />
          </aside>
          <RecipeList {...state} getRecipeList={getRecipeList} />
        </>
      )}
    </div>
  );
};
