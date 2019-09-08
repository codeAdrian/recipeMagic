import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useSavedRecipes } from 'hooks';

export const Navigation = () => {
  const { getItem } = useSavedRecipes();

  const jsonRecipes = getItem() || [];
  const savedRecipes = jsonRecipes.length;

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__listItem">
          <NavLink
            activeClassName="nav__link--active"
            className="nav__link"
            exact
            to="/"
          >
            Homepage
          </NavLink>
        </li>
        <li className="nav__listItem">
          <NavLink
            activeClassName="nav__link--active"
            className="nav__link"
            exact
            to="/saved-recipes"
          >
            Saved Recipes ({savedRecipes})
          </NavLink>
        </li>
        <li className="nav__listItem">
          <NavLink
            activeClassName="nav__link--active"
            className="nav__link"
            to="/recipes"
          >
            Recipes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
