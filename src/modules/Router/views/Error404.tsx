import * as React from 'react';
import anime from 'animejs';

import step3 from 'assets/step1.png';
import step2 from 'assets/step2.png';
import step1 from 'assets/step3.png';
import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

export const Error404 = () => {
  const fadeIn = () => {
    const fadeIn = anime.timeline();
    fadeIn.add({
      targets: '.main',
      opacity: [0, 1],
      duration: 500,
      easing: 'easeInOutQuad'
    });
  };

  useLayoutEffect(() => {
    fadeIn();
  }, []);

  return (
    <section>
      <div className="recipeList__start">
        <div className="recipeList__images">
          <img alt="Step 1" src={step1} />
          <img alt="Step 2" src={step2} />
          <img alt="Step 3" src={step3} />
        </div>
        <h2 className="heading heading--level1">
          <span className="gradient--text">Nothing yummy found :(</span>
        </h2>
        <p className="paragraph heading heading--level3">
          This page doesn't exist or it has been removed.
        </p>
        <div>
          <Link className="button button--regular button--cta" to="/">
            Return to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
