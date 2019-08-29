import { categories } from 'const';
import { FILTERS_TYPES } from 'modules/Filters/redux/types';
import { useDispatch } from 'react-redux';
import * as React from 'react';

export const RecipeCategories = () => {
  const dispatch = useDispatch();

  return (
    <section className="recipeCategories">
      {categories.map(({ items, title, key }: any) => (
        <article>
          <h2 className="heading heading--level2">{title}</h2>
          <ul className="recipeCategories__list">
            {items.map(({ category, image, data }: any) => (
              <li key={data}>
                <button
                  onClick={() => {
                    dispatch({
                      type: FILTERS_TYPES.FILTERS_ADD,
                      payload: { key, data }
                    });
                  }}
                >
                  <img className="recipeCategories__image" src={image}></img>
                  <h3 className="heading heading--level4">{category}</h3>
                </button>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};
