import React, { useLayoutEffect } from 'react';
import anime from 'animejs';
import { useSavedRecipes } from 'hooks';
import { Link } from 'react-router-dom';
import { LazyImage } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const SavedRecipes = () => {
  const { setItem, getItem } = useSavedRecipes();
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

  const jsonRecipes = getItem();
  if (!jsonRecipes) return null;

  return (
    <section className="container container--withPadding">
      <h2 className="heading heading--level2">Saved Recipes</h2>
      <ul className="savedRecipes__list">
        {jsonRecipes.map(({ image, id, label }: any, index: number) => (
          <li key={index} className="savedRecipes__link">
            <div className="savedRecipes__image">
              <LazyImage src={image} />
            </div>
            <div className="savedRecipes__content">
              <div className="savedRecipes__title">
                <h3 className="heading heading--level4">{label}</h3>
                <Link
                  to={`/recipes/recipe/${id}`}
                  className="button button--regular button--cta"
                >
                  View recipe
                </Link>
              </div>
              <div>
                <button className="button savedRecipes__button">
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
