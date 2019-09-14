import * as React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__col footer__col--info">
          <h1 className="logo footer__logo">
            <span className="logo__link footer__logo">Recipe Magic</span>
          </h1>

          <p className="paragraph">
            uses the awesome Edamam API for recipes and nutrition data.
          </p>
          <p className="paragraph">&copy; 2019 by Adrian Bece</p>
        </div>
        <div className="footer__col footer__col--links">
          <strong className="footer__sectionTitle">Recipe Magic</strong>
          <ul className="footer__list">
            <li>
              <Link className="footer__link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/saved-recipes">
                Saved Recipes
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/recipes">
                All Recipes
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__col footer__col--links">
          <strong className="footer__sectionTitle">codeAdrian</strong>
          <ul className="footer__list">
            <li>
              <a
                href="http://codeadrian.github.io"
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                codeAdrian
              </a>
            </li>
            <li>
              <a
                href="https://dev.to/adrianbdesigns"
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                dev.to
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/AdrianBDesigns"
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/adrianbece/"
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
