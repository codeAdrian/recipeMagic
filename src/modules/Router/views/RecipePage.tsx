import React, { useLayoutEffect } from 'react';
import { RecipeDetails } from 'modules';
import { useEdamam } from 'hooks';
import anime from 'animejs';

export const RecipePage: React.FC<any> = ({ match }) => {
  const [{ getRecipeDetails }] = useEdamam();
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

  return (
    <RecipeDetails getRecipeDetails={getRecipeDetails} id={match.params.id} />
  );
};
