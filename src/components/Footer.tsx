import * as React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__col footer__col--info">
          <h1 className="logo footer__logo">
            <span className="logo__link footer__logo">Recipe Magic</span>
          </h1>

          <p>uses the awesome Edamam API for recipes and nutrition data.</p>
          <p>&copy; 2019 by Adrian Bece</p>
        </div>
        <div className="footer__col footer__col--links">
          <strong className="footer__sectionTitle">Recipe Magic</strong>
          <ul className="footer__list">
            <li>Home</li>
            <li>About</li>
            <li>Recipes</li>
          </ul>
        </div>

        <div>
          <strong className="footer__sectionTitle">codeAdrian</strong>
          <ul className="footer__list">
            <li>Website</li>
            <li>dev.to</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
