import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isObjectEmpty } from 'util/isObjectEmpty';

export const RecipeDetails: React.FC<any> = ({ getRecipeDetails, id }) => {
  const recipe = useSelector((state: any) => state.recipe);

  useEffect(() => {
    getRecipeDetails(
      `http://www.edamam.com/ontologies/edamam.owl#recipe_${id}`
    );
  }, []);

  console.log('RENDER', recipe);

  if (isObjectEmpty(recipe) || recipe.isLoading) return <div>Loading</div>;

  const {
    calories,
    url,
    totalTime,
    cautions,
    dietLabels,
    source,
    healthLabels,
    digest,
    totalDaily,
    ingredientLines,
    label,
    totalNutrients,
    image
  } = recipe;

  const servings = recipe.yield;

  const destructure = (arr: Array<any>) => (arr ? arr : []);

  const labels = [
    ...destructure(cautions),
    ...destructure(dietLabels),
    ...destructure(healthLabels)
  ];

  return (
    <section>
      <header>
        <img src={image} alt={label} />
        <h2>{label}</h2>
        By <a href={url}>{source}</a>
        <div>
          {Math.ceil(calories)} calories | {servings} servings | {totalTime}{' '}
          minutes
        </div>
      </header>
      <article>
        <h3>Ingredients</h3>
        <ul>
          {ingredientLines.map((item: string, index: number) => (
            <li key={`ingredient-line-${index}`}>{item}</li>
          ))}
        </ul>
      </article>

      <article>
        <h3>Diet</h3>
        <ul>
          {labels.map((item: string, index: number) => (
            <li key={`diet-label-${index}`}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
};
