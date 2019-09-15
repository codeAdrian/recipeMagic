import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import hero from 'assets/hero-min.png';
import anime from 'animejs';

import step3 from 'assets/step1.png';
import step2 from 'assets/step2.png';
import step1 from 'assets/step3.png';

export const Homepage = () => {
  const fadeIn = () => {
    const fadeIn = anime.timeline();
    fadeIn
      .add({
        targets: '.main',
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutQuad'
      })
      .add(
        {
          targets: '.home__hero--text',
          opacity: [0, 1],
          translateX: ['-5%', 0],
          duration: 1000,
          easing: 'easeOutQuad'
        },
        '-=500'
      )
      .add(
        {
          targets: '.home__hero--image',
          opacity: [0, 1],
          translateX: ['5%', 0],
          duration: 1000,
          easing: 'easeOutQuad'
        },
        '-=1200'
      );
  };

  useLayoutEffect(() => {
    fadeIn();
  }, []);

  return (
    <section>
      <article className="home__hero">
        <div className="home__hero--text">
          <h2 className="heading heading--level1">
            Explore foods from around the globe
            <span className="gradient--text">.</span>
          </h2>
          <p className="paragraph color--gray--light">
            Whether you're looking for healthy recipes, or ideas on how to use
            leftovers from your fridge, we've numerous recipes to choose from,
            so you'll be able to find the perfect dish.
          </p>
          <Link to="/recipes" className="button--cta button--regular">
            Search Recipes
          </Link>
        </div>
        <div className="home__hero--image">
          <img alt="Plate with food" src={hero} />
        </div>
      </article>

      <article className="home__about container container--withPadding">
        <h2 className="heading heading--level2">How it works</h2>
        <p className="paragraph home__subtitle color--gray--light">
          It only takes a few simple steps to find the recipe you're looking
          for.
        </p>

        <div className="home__wrapper">
          <div className="home__card">
            <img alt="Coffee cup" className="home__image" src={step1} />
            <h3 className="heading heading--level3 home__title">
              Search by recipe
            </h3>
            <p className="paragraph color--gray--light">
              Already know what you're looking for? Just type the recipe name in
              search and choose a recipe.
            </p>
          </div>
          <div className="home__card">
            <img alt="Turkey lunch" className="home__image" src={step2} />
            <h3 className="heading heading--level3 home__title">
              Search by ingredients
            </h3>
            <p className="paragraph color--gray--light">
              Looking for recipe ideas? Just input ingredients in the
              Ingredients filter and see what comes up.
            </p>
          </div>
          <div className="home__card">
            <img alt="Bowl of rice" className="home__image" src={step3} />
            <h3 className="heading heading--level3 home__title">
              Filter recipes
            </h3>
            <p className="paragraph color--gray--light">
              Want to keep only certain recipes? We have both diet and health
              filters to help you find the perfect recipe for you.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
