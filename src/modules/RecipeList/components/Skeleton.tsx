import * as React from 'react';

export const Skeleton = () => {
  return (
    <li className="recipeCard">
      <div className="recipeCard__link">
        <div className="recipeCard__image--skeleton" />
        <div className="recipeCard__wrapper">
          <div>
            <h3 className="recipeCard__title">
              <span className="recipeCard__skeleton recipeCard__skeleton--large"></span>
            </h3>
            <p className="paragraph">
              <span className="recipeCard__skeleton recipeCard__skeleton--large"></span>
            </p>
          </div>

          <div className="recipeCard__info">
            <span className="recipeCard__skeleton recipeCard__skeleton--medium"></span>{' '}
            <span className="recipeCard__skeleton recipeCard__skeleton--medium"></span>
          </div>
        </div>
      </div>
    </li>
  );
};
