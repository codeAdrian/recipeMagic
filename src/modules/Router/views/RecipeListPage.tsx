import React, { useCallback, useLayoutEffect, useEffect } from 'react';
import anime from 'animejs';
import { withRouter } from 'react-router-dom';
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
import qs from 'qs';

const RecipeListPage = ({ history }: any) => {
  const [{ getRecipeList }] = useEdamam();
  const dispatch = useDispatch();
  const fadeIn = () => {
    const fadeIn = anime.timeline();
    fadeIn.add({
      targets: '.main',
      opacity: [0, 1],
      duration: 500,
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
  const filters = useSelector((state: any) => state.filters);

  const queryFilters = filters;
  delete queryFilters.isLoading;

  const queryString = qs.stringify(queryFilters);

  useEffect(() => {
    history.push({
      search: `?${queryString}`
    });
  }, [queryString]);

  const [state, api] = useSearch(handleSearchSubmit);

  return (
    <div className="container--withPadding container">
      <aside className="filters">
        <div className="filters__group">
          <Ingredients />
          <HealthFilters />
          <DietFilters />
        </div>
        <Search currentQuery={currentQuery} {...state} {...api} />
      </aside>
      <RecipeList {...state} getRecipeList={getRecipeList} />
    </div>
  );
};

export default withRouter(RecipeListPage);
