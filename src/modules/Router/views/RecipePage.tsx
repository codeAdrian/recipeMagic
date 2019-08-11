import React, { useEffect } from 'react';
import { RecipeDetails } from 'modules';
import { useEdamam } from 'hooks';

export const RecipePage: React.FC<any> = ({ match }) => {
  const [{ getRecipeDetails }] = useEdamam();

  return (
    <div>
      <RecipeDetails getRecipeDetails={getRecipeDetails} id={match.params.id} />
      Recipe page
    </div>
  );
};
