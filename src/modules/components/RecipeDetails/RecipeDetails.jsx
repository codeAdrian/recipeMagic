import React from 'react';
import { Info, Ingredients, Nutrition } from './components';

const RecipeDetails = ({
    loadedRecipe,
    handleClose,
    ingredientsList,
    modalActive
}) => {
    return (
        <div
            className={
                modalActive ? 'recipeModal recipeModal--active' : 'recipeModal'
            }
        >
            <div className="recipeModal__overlay" onClick={handleClose} />
            <div className="recipeModal__content">
                {Object.keys(loadedRecipe).length !== 0 ? (
                    <div>
                        <button
                            className="recipeModal__close"
                            onClick={handleClose}
                        >
                            <i className="fas fa-times" />
                        </button>

                        <Info
                            label={loadedRecipe.label}
                            source={loadedRecipe.source}
                            yields={loadedRecipe.yield}
                            totalTime={loadedRecipe.totalTime}
                        />

                        <Ingredients
                            ingredientLines={loadedRecipe.ingredientLines}
                            url={loadedRecipe.url}
                            ingredientsList={ingredientsList}
                        />

                        <Nutrition totalDaily={loadedRecipe.totalDaily} />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default RecipeDetails;
