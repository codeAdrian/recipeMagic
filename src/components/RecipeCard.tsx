import * as React from 'react';
import { Link } from 'react-router-dom';
import { getUri } from 'util/getUri';

export const RecipeCard = ({
  calories,
  ingredients,
  image,
  label,
  uri
}: any) => {
  return (
    <li className="recipeCard">
      <Link className="recipeCard__link" to={`/recipe/${getUri(uri)}`}>
        <img className="recipeCard__image" src={image} alt={label} />
        <div className="recipeCard__wrapper">
          <h3 className="recipeCard__title">{label}</h3>
          <div className="recipeCard__info">
            <strong className="gradient--text">{Math.ceil(calories)}</strong> calories |{' '}
            <strong className="gradient--text">{ingredients.length}</strong> ingredients
        </div>
        </div>
      </Link>
    </li>
  );
};
