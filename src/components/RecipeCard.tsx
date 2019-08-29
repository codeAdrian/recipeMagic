import * as React from 'react';
import { Link } from 'react-router-dom';
import { getUri } from 'util/getUri';

export const RecipeCard = ({
  calories,
  ingredients,
  image,
  label,
  source,
  uri
}: any) => {
  return (
    <li className="recipeCard">
      <Link className="recipeCard__link" to={`/recipes/recipe/${getUri(uri)}`}>
        <img className="recipeCard__image" src={image} alt={label} />
        <div className="recipeCard__wrapper">
          <div>
            <h3 className="recipeCard__title">{label}</h3>
            <p className="paragraph">
              <strong>
                By <span className="gradient--text">{source}</span>
              </strong>
            </p>
          </div>

          <div className="recipeCard__info">
            <strong className="gradient--text">{Math.ceil(calories)}</strong>{' '}
            calories |{' '}
            <strong className="gradient--text">{ingredients.length}</strong>{' '}
            ingredients
          </div>
        </div>
      </Link>
    </li>
  );
};
