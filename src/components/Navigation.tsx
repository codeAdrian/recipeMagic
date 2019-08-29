import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
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
            to="/about"
          >
            About
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
