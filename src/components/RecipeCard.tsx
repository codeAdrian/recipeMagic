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
    <li>
      <Link to={`/recipe/${getUri(uri)}`}>
        <img src={image} alt={label} />
        <h3>{label}</h3>
        <div>
          {Math.ceil(calories)} | {ingredients.length}
        </div>
      </Link>
    </li>
  );
};
