import * as React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__listItem">
          <Link className="nav__link" to="/">Homepage</Link>
        </li>
        <li className="nav__listItem">
          <Link className="nav__link" to="/about">About</Link>
        </li>
        <li className="nav__listItem">
          <Link className="nav__link" to="/recipes">Recipes</Link>
        </li>
      </ul>
    </nav>
  );
};
