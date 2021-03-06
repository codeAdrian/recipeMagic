import * as React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <h1 className="logo">
      <Link className="logo__link gradient--text" to="/">
        Recipe Magic
      </Link>
    </h1>
  );
};
