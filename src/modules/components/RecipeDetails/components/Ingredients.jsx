import React from 'react';

const Ingredients = ({ ingredientLines, url, ingredientsList }) => (
    <div className="modalSection">
        <h2 className="modalSection__title">Ingredients</h2>
        <ul className="recipeModal__list">
            {ingredientLines.map((ingredient, index) => {
                let haveIngredient = false;

                for (let i = 0; i < ingredientsList.length; i++) {
                    const index = ingredient
                        .toLowerCase()
                        .indexOf(ingredientsList[i].toLowerCase());
                    if (index > 0) haveIngredient = true;
                }

                return (
                    <li
                        className={
                            haveIngredient
                                ? 'recipeModal__listItem haveIngredient'
                                : 'recipeModal__listItem'
                        }
                        key={index}
                    >
                        {ingredient}
                    </li>
                );
            })}
        </ul>
        <a className="button button--cta" href={url} target="_blank">
            View Recipe
            <i className="fas fa-chevron-right" />
        </a>
    </div>
);

export default Ingredients;
