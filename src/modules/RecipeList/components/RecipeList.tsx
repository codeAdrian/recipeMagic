import React, { useEffect } from 'react';
import { RecipeCard } from 'components';
import { useSelector } from 'react-redux';

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

  console.log('recipes', recipes);

  if ((!hits || hits.length === 0) && isLoading) return <div>Loading</div>;

  return (
    <ul>
      {hits.map(({ recipe }: any) => (
        <RecipeCard key={recipe.uri} {...recipe} />
      ))}
    </ul>
  );
};
