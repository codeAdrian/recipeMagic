import React, { useLayoutEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DietGraph } from './DietGraph';
import { LazyImage, Accordion } from 'components';
import { Skeleton } from './Skeleton';
import { useSavedRecipes } from 'hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

export const RecipeDetails: React.FC<any> = ({ getRecipeDetails, id }) => {
  const recipe = useSelector((state: any) => state.recipe);
  const [{ savedRecipes }, { setItem }] = useSavedRecipes();

  useLayoutEffect(() => {
    getRecipeDetails(
      `http://www.edamam.com/ontologies/edamam.owl#recipe_${id}`
    );
  }, []);

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

  const isRecipeSaved = useMemo(
    () => savedRecipes.find((recipe: any) => recipe.id === id),
    [savedRecipes, id]
  );

  const handleSaveRecipe = useCallback(() => {
    if (isRecipeSaved) {
      toast('Recipe already saved :)', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      return;
    }

    savedRecipes.push({
      label,
      id,
      image,
      source
    });
    toast.success('Recipe saved! :)', {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    setItem(savedRecipes);
  }, [recipe, savedRecipes]);

  if (!url || !label || !source || recipe.isLoading) return <Skeleton />;

  const servings = recipe.yield;

  const destructure = (arr: Array<any>) => (arr ? arr : []);

  const labels = [
    ...destructure(cautions),
    ...destructure(dietLabels),
    ...destructure(healthLabels)
  ];

  digest.length = 3;

  return (
    <section className="container container--withPadding">
      <header className="recipe__header">
        <div className="recipe__header--image">
          <LazyImage src={image} alt={label} />
        </div>
        <div className="recipe__header--content">
          <div>
            <Link
              className="button button--secondary recipe__link"
              to="/recipes/list"
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Return to recipes
            </Link>
          </div>
          <div>
            <h2 className="heading heading--level1 recipe__title--main">
              {label}
            </h2>
            <p className="paragraph">
              By{' '}
              <a href={url} target="_blank" rel="nofollow noreferrer">
                <strong className="gradient--text">{source}</strong>
              </a>{' '}
              |{' '}
              {isRecipeSaved ? (
                <span>Recipe Saved</span>
              ) : (
                <button onClick={handleSaveRecipe}>
                  <strong className="gradient--text">Save Recipe</strong>
                </button>
              )}
            </p>
          </div>

          <div>
            <strong className="gradient--text">{Math.ceil(calories)}</strong>{' '}
            calories | <strong className="gradient--text">{servings}</strong>{' '}
            servings
            {parseInt(totalTime) > 0 && (
              <>
                | <strong className="gradient--text">{totalTime}</strong>{' '}
                minutes
              </>
            )}
          </div>
        </div>
      </header>
      <div className="recipe__wrapper">
        <article>
          <h3 className="heading heading--level3">Ingredients</h3>
          <ul className="list--styled">
            {ingredientLines.map((item: string, index: number) => (
              <li key={`ingredient-line-${index}`}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h3 className="heading heading--level3">Preparation</h3>
          <p className="paragraph">
            This recipe is provided by{' '}
            <a href={url} target="_blank" rel="nofollow noreferrer">
              <strong className="gradient--text">{source}</strong>
            </a>
            . You can view the detailed preparation instructions by clicking the
            following link.
          </p>
          <a
            href={url}
            target="_blank"
            rel="nofollow noreferrer"
            className="button button--regular button--cta"
          >
            Preparation Instructions
          </a>
        </article>
      </div>

      <div className="recipe__wrapper">
        <article>
          <h3 className="heading heading--level3">Nutrition</h3>
          <Accordion>
            <table>
              <tbody>
                {Object.keys(totalDaily).map((key: string, index) => (
                  <tr key={`nutrient-${index}`}>
                    <td>{totalDaily[key].label} </td>
                    <td>{`${totalDaily[key].quantity.toFixed(2)}${
                      totalDaily[key].unit
                    }`}</td>
                    <td>{`${totalNutrients[key].quantity.toFixed(2)}${
                      totalNutrients[key].unit
                    }`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Accordion>
        </article>

        <article>
          <h3 className="heading heading--level4">Diet</h3>
          <p className="paragraph">{labels.join(', ')}</p>
          <DietGraph digest={digest} />
        </article>
      </div>
    </section>
  );
};
