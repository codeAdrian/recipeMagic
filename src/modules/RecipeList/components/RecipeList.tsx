import React, { useLayoutEffect } from 'react';
import { RecipeCard } from 'components';
import { useSelector } from 'react-redux';
import { Pagination } from './Pagination';
import { Skeleton } from './Skeleton';

import step3 from 'assets/step1.png';
import step2 from 'assets/step2.png';
import step1 from 'assets/step3.png';

interface Props {
  getRecipeList: any;
  searchQuery: string;
}

export const RecipeList: React.FC<Props> = ({ getRecipeList, searchQuery }) => {
  const recipes = useSelector((state: any) => state.recipes);
  const filters = useSelector((state: any) => state.filters);
  const { hits, isLoading } = recipes;

  useLayoutEffect(() => {
    getRecipeList(filters);
  }, [filters]);

  if (hits.length === 0 && !isLoading) {
    return (
      <div className="recipeList__start">
        <div className="recipeList__images">
          <img src={step1} />
          <img src={step2} />
          <img src={step3} />
        </div>
        <h2 className="heading heading--level1">
          <span className="gradient--text">No recipes found :(</span>
        </h2>
        <p className="paragraph heading heading--level3">
          Try changing ingredients or filters. Also, make sure that your search
          query is correct and try again.
        </p>
      </div>
    );
  }

  return (
    <>
      <ul className="recipeList">
        {isLoading
          ? [...new Array(24)].map((item, index) => (
              <Skeleton key={`skeleton-${index}`}></Skeleton>
            ))
          : hits.map(({ recipe }: any) => (
              <RecipeCard key={recipe.uri} {...recipe} />
            ))}
      </ul>
      {isLoading ? (
        <div className="pagination">
          {[...new Array(5)].map((_, index) => (
            <div className="pagination__button" key={`skeleton-page-${index}`}>
              &nbsp;
            </div>
          ))}
        </div>
      ) : (
        <Pagination currentPage={filters.currentPage} {...recipes} />
      )}
    </>
  );
};
