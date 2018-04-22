import React from 'react';
import Toolbar from './Toolbar';

const Main = ({
    recipesList,
    isLoading,
    handleNutritionInfo,
    handlePageChange,
    page,
    totalPages
}) => (
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
        <Toolbar
            handlePageChange={handlePageChange}
            page={page}
            totalPages={totalPages}
        />
        {isLoading ? (
            <div className="loading">
                <img src="images/loading.svg" alt="Loading" />
            </div>
        ) : null}
    </main>
);

export default Main;
