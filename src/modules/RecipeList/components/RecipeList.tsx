import React, { useEffect } from 'react';
import { RecipeCard, Loading } from 'components';
import { useSelector } from 'react-redux';
import { Pagination } from './Pagination';

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

  useEffect(() => {
    getRecipeList(filters);
  }, [filters]);

  if ((!hits || hits.length === 0) && isLoading) return <Loading />;

  console.log('HITS', hits);

  if (hits.length === 0) {
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
        {hits.map(({ recipe }: any) => (
          <RecipeCard key={recipe.uri} {...recipe} />
        ))}
      </ul>
      <Pagination {...recipes} />
    </>
  );
};
