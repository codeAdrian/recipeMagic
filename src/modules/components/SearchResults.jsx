import React from 'react';

const SearchResults = ({
    handleIngredientNumber,
    handleRemoveFromList,
    ingredientsList,
    recipesList,
    handleNutritionInfo
}) => (
    <div className="columnsWrapper">
        <aside className="columnsWrapper__sidebar">
            <h2>Filters</h2>
            <label>Max number of ingredients:</label>
            <input
                min="0"
                id="ingredientNumber"
                type="number"
                onChange={handleIngredientNumber}
            />
            <label>Ingredients:</label>
            {ingredientsList.map(ingredient => (
                <div>
                    <button
                        className="button button--remove"
                        value={ingredient}
                        onClick={handleRemoveFromList}
                        key={ingredient}
                    >
                        <i className="fas fa-times" />
                        {ingredient}
                    </button>
                </div>
            ))}
        </aside>
        <main className="columnsWrapper__content">
            <ul className="recipesList">
                {recipesList.map((recipe, index) => (
                    <li
                        className="recipesList__item"
                        key={index}
                        value={index}
                        onClick={handleNutritionInfo}
                    >
                        <div className="recipesList__wrapper">
                            <img
                                className="recipesList__image"
                                src={recipe.recipe.image}
                                alt={recipe.recipe.label}
                            />
                            <h2 className="recipesList__title">
                                {recipe.recipe.label.length > 40 ? (
                                    <small>{recipe.recipe.label}</small>
                                ) : (
                                    recipe.recipe.label
                                )}
                            </h2>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    </div>
);

export default SearchResults;
