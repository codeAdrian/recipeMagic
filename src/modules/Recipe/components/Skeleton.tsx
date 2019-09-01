import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const Skeleton = () => (
  <section className="container container--withPadding">
    <header className="recipe__header">
      <div className="recipe__header--image">
        <div className="recipe__image--skeleton" />
      </div>
      <div className="recipe__header--content">
        <Link
          className="button button--secondary recipe__link"
          to="/recipes/list"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Return to recipes
        </Link>
        <h2 className="heading heading--level1 recipe__title--main">
          <div className="recipe__title--skeleton" />
        </h2>
        <p className="paragraph">
          <div className="recipe__text--skeleton" />
        </p>

        <div>
          <div className="recipe__text--skeleton" />
        </div>
      </div>
    </header>
    <div className="recipe__wrapper">
      <article>
        <h3 className="heading heading--level3">Ingredients</h3>
        <ul className="list--styled">
          <li>
            <div className="recipe__list--skeleton" />
          </li>
          <li>
            <div className="recipe__list--skeleton" />
          </li>
          <li>
            <div className="recipe__list--skeleton" />
          </li>
          <li>
            <div className="recipe__list--skeleton" />
          </li>
          <li>
            <div className="recipe__list--skeleton" />
          </li>
          <li>
            <div className="recipe__list--skeleton" />
          </li>
          <li>
            <div className="recipe__list--skeleton" />
          </li>
        </ul>
      </article>
      <article>
        <h3 className="heading heading--level3">Preparation</h3>
        <p className="paragraph">
          <div className="recipe__block--skeleton" />
        </p>
        <div className="recipe__text--skeleton" />
      </article>
    </div>

    <div className="recipe__wrapper">
      <article>
        <h3 className="heading heading--level3">Nutrition</h3>
        <div className="recipe__block--skeleton" />
      </article>

      <article>
        <h3 className="heading heading--level3">Diet</h3>
        <div className="recipe__block--skeleton" />
      </article>
    </div>
  </section>
);
