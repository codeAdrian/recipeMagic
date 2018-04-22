import React from 'react';
import { Main, Sidebar } from './components';

const SearchResults = ({
    handleIngredientNumber,
    handleRemoveFromList,
    ingredientsList,
    recipesList,
    page,
    isLoading,
    totalPages,
    handlePageChange,
    handleNutritionInfo
}) => (
    <div className="columnsWrapper">
        <Sidebar
            handleIngredientNumber={handleIngredientNumber}
            ingredientsList={ingredientsList}
            handleRemoveFromList={handleRemoveFromList}
        />
        <Main
            recipesList={recipesList}
            isLoading={isLoading}
            handleNutritionInfo={handleNutritionInfo}
            handlePageChange={handlePageChange}
            page={page}
            totalPages={totalPages}
        />
    </div>
);

export default SearchResults;
