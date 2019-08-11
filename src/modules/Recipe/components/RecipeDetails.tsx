import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DietGraph } from "./DietGraph";
import { isObjectEmpty } from 'util/isObjectEmpty';

export const RecipeDetails: React.FC<any> = ({ getRecipeDetails, id }) => {
  const recipe = useSelector((state: any) => state.recipe);

  useEffect(() => {
    getRecipeDetails(
      `http://www.edamam.com/ontologies/edamam.owl#recipe_${id}`
    );
  }, []);

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

  digest.length = 3;

  return (
    <section>
      <header className="recipe__header">
        <div className="recipe__header--image">
          <img src={image} alt={label} />
        </div>
        <div>
          <h2 className="heading heading--level1 recipe__title--main">{label}</h2>
          By{" "}
          <a href={url}>
            <strong className="gradient--text">
              {source}
            </strong>
          </a>
          <div>
            {Math.ceil(calories)} calories | {servings} servings | {totalTime}{' '}
            minutes
        </div>
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
        <h3>Nutrition</h3>
        <table>
          <tbody>
            {
              Object.keys(totalDaily).map((key: string, index) => <tr key={`nutrient-${index}`}>
                <td>{totalDaily[key].label} </td>
                <td>{`${totalDaily[key].quantity.toFixed(2)}${totalDaily[key].unit}`}</td>
                <td>{`${totalNutrients[key].quantity.toFixed(2)}${totalNutrients[key].unit}`}</td>
              </tr>
              )
            }
          </tbody>
        </table>
      </article>

      <article>
        <h3>Diet</h3>
        <ul>
          {labels.map((item: string, index: number) => (
            <li key={`diet-label-${index}`}>{item}</li>
          ))}
        </ul>
        <DietGraph digest={digest} />
      </article>
    </section>
  );
};
