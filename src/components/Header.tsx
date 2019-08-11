import * as React from 'react';
import { Logo, Navigation } from 'components';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
