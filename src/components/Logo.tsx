import * as React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <h1>
      <Link to="/">Recipe Magic</Link>
    </h1>
  );
};
