import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const savedRecipes = useSelector((state: any) => state.savedRecipes);
  const savedRecipesNum = savedRecipes.length || 0;
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
            Home<span className="nav__link--hidden">page</span>
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
        <li className="nav__listItem">
          <NavLink
            activeClassName="nav__link--active"
            className="nav__link"
            exact
            to="/saved-recipes"
          >
            Saved <span className="nav__link--hidden">Recipes</span> (
            {savedRecipesNum})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
