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
import Helmet from 'react-helmet';

export const SavedRecipes = () => {
  const [{ savedRecipes }, { setItem }] = useSavedRecipes();
  const fadeIn = () => {
    const fadeIn = anime.timeline();
    fadeIn
      .add({
        targets: '.main',
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInQuad'
      })
      .add(
        {
          targets: '.heroBanner__background',
          opacity: [0, 0.6],
          translateX: ['-100%', 0],
          duration: 500,
          easing: 'easeInQuad'
        },
        '-=500'
      )
      .add(
        {
          targets: '.heroBanner__background > *',
          opacity: [0, 1],
          translateY: ['-15%', 0],
          duration: 400,
          delay: (el, i, l) => i * 300,
          easing: 'easeInQuad'
        },
        '-=200'
      )
      .add(
        {
          targets: '.savedRecipes__list',
          opacity: [0, 1],
          duration: 500,
          translateY: ['2%', 0],
          delay: (el, i, l) => i * 150,
          easing: 'easeInQuad'
        },
        '-=100'
      );
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
    [savedRecipes, setItem]
  );

  if (!savedRecipes || savedRecipes.length === 0)
    return (
      <section className="recipeList__start container container--withPadding">
        <Helmet>
          <meta name="og:title" content={`Saved Recipes | Recipe Magic`} />
          <title>{`Saved Recipes | Recipe Magic`}</title>
        </Helmet>
        <div className="recipeList__images">
          <img alt="" src={step1} />
          <img alt="" src={step2} />
          <img alt="" src={step3} />
        </div>
        <h2 className="heading heading--level1">
          <span className="gradient--text">No saved recipes found :(</span>
        </h2>
        <div className="container container--smaller">
          <p className="paragraph">
            But don't worry. Start by visiting the recipes page. There you can
            choose from a selected group of recipes or search by recipe name or
            ingredients.
          </p>
          <Link to="/recipes" className="button button--regular button--cta">
            Take me to the recipes!
          </Link>
        </div>
      </section>
    );

  return (
    <section>
      <article className="heroBanner recipeCategories__hero">
        <div className="container container--smaller container--withPadding">
          <h2 className="heading heading--level2">Saved Recipes</h2>
          <p className="heading heading--level4 margin--clear">
            Here you can find all recipes that you've saved, neatly sorted from
            oldest to newest.
          </p>
        </div>
        <div className="heroBanner__background"></div>
      </article>
      <article className="container container--withPadding">
        <ul className="savedRecipes__list">
          {savedRecipes.map(({ image, id, label }: any, index: number) => (
            <li key={index} className="savedRecipes__link">
              <div className="savedRecipes__image">
                <LazyImage alt={label} src={image} />
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
      </article>
    </section>
  );
};
