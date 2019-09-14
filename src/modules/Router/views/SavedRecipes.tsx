import React, { useLayoutEffect, useCallback } from 'react';
import anime from 'animejs';
import { useSavedRecipes } from 'hooks';
import { Link } from 'react-router-dom';
import { LazyImage } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import step3 from 'assets/step1.png';
import step2 from 'assets/step2.png';
import step1 from 'assets/step3.png';

export const SavedRecipes = () => {
  const [{ savedRecipes }, { setItem }] = useSavedRecipes();
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

  const handleRemoveClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { value } = event.currentTarget;
      const savedRecipesNew = savedRecipes.filter(
        ({ id }: any) => id !== value
      );
      setItem(savedRecipesNew);
    },
    [savedRecipes]
  );

  if (!savedRecipes || savedRecipes.length === 0)
    return (
      <div className="recipeList__start">
        <div className="recipeList__images">
          <img src={step1} />
          <img src={step2} />
          <img src={step3} />
        </div>
        <h2 className="heading heading--level1">
          <span className="gradient--text">
            You haven't saved any recipes :(
          </span>
        </h2>
        <p className="paragraph">
          But don't worry. Start by visiting the recipes page. There you can
          choose from a selected group of recipes or search by recipe name or
          ingredients.
        </p>
        <Link to="/recipes" className="button button--regular button--cta">
          Take me to the recipes!
        </Link>
      </div>
    );

  return (
    <section className="container container--withPadding">
      <h2 className="heading heading--level2">Saved Recipes</h2>
      <ul className="savedRecipes__list">
        {savedRecipes.map(({ image, id, label }: any, index: number) => (
          <li key={index} className="savedRecipes__link">
            <div className="savedRecipes__image">
              <LazyImage src={image} />
            </div>
            <div className="savedRecipes__content">
              <div className="savedRecipes__title">
                <h3 className="heading heading--level4">
                  <div className="savedRecipes__titleText">{label}</div>
                </h3>
                <Link
                  to={`/recipes/recipe/${id}`}
                  className="button button--regular button--cta"
                >
                  View recipe
                </Link>
              </div>
              <div>
                <button
                  onClick={handleRemoveClick}
                  value={id}
                  className="button savedRecipes__button"
                >
                  <FontAwesomeIcon fixedWidth icon={faTimes} />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
