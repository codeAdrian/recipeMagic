import React, { Component } from 'react';
import { Search, SearchResults, Landing, RecipeDetails } from './components';
import axios from 'axios';

class RecipeMagic extends Component {
    searchTimeout = null;
    searchTimeoutValue = 500;
    apiKey = '9d87cb9ebbfba0778158ac0ef5ba279a';
    appId = '7aa82991';

    state = {
        searchValue: '',
        recipesList: [],
        ingredientsList: [],
        recipeLoaded: false,
        ingredientNumber: 0,
        loadedRecipe: {}
    };

    updateSearchValue = event => {
        this.setState({ searchValue: encodeURI(event.target.value) });
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(
            this.searchRecipes,
            this.searchTimeoutValue
        );
    };

    handleSearchRequest = response => {
        const recipesList = response.data.hits;
        this.setState({ recipesList: recipesList });
    };

    handleAddToList = value => {
        let currentIngredients = this.state.ingredientsList;
        currentIngredients.push(value);
        this.setState(
            { ingredientsList: currentIngredients },
            this.searchRecipes
        );
    };

    handleRemoveFromList = event => {
        const valueToRemove = event.currentTarget.value;
        console.log(valueToRemove);
        let currentIngredients = this.state.ingredientsList;
        var index = currentIngredients.indexOf(valueToRemove);

        if (index > -1) {
            currentIngredients.splice(index, 1);
            console.log('With removed', currentIngredients);

            this.setState(
                { ingredientsList: currentIngredients },
                this.searchRecipes
            );
        }
    };

    handleIngredientNumber = event => {
        const value = event.currentTarget.value;
        console.log(value);
        this.setState({ ingredientNumber: value }, this.searchRecipes);
    };

    searchRecipes = () => {
        /* ingr	no	integer	Maximum number of ingredients. Example: ingr=5 */
        let query = `https://api.edamam.com/search?q=${this.state.ingredientsList.join(
            ','
        )}&app_id=${this.appId}&app_key=${this.apiKey}`;
        if (this.state.ingredientNumber > 0) {
            query += `&ingr=${this.state.ingredientNumber}`;
        }
        console.log(query);
        axios.get(query).then(response => {
            console.log(response);
            this.handleSearchRequest(response);
        });
    };

    handleClose = () => {
        this.setState({ loadedRecipe: {} });
    };

    handleNutritionInfo = event => {
        const { value } = event.currentTarget;

        this.setState(
            { loadedRecipe: this.state.recipesList[value].recipe },
            () => console.log(this.state.loadedRecipe)
        );
    };

    render() {
        const recipesList = this.state.recipesList;
        const loadedRecipe = this.state.loadedRecipe;

        return (
            <div>
                {Object.keys(loadedRecipe).length !== 0 ? (
                    <RecipeDetails
                        handleClose={this.handleClose}
                        loadedRecipe={loadedRecipe}
                    />
                ) : null}

                <header className="header">
                    <h1>Recipe Magic</h1>
                    <Search
                        handleAddToList={this.handleAddToList}
                        ingredientsList={this.state.ingredientsList}
                        updateSearchValue={this.updateSearchValue}
                    />
                </header>
                {this.state.ingredientsList.length > 0 ? (
                    <SearchResults
                        handleIngredientNumber={this.handleIngredientNumber}
                        handleRemoveFromList={this.handleRemoveFromList}
                        ingredientsList={this.state.ingredientsList}
                        recipesList={recipesList}
                        handleNutritionInfo={this.handleNutritionInfo}
                    />
                ) : (
                    <Landing />
                )}
            </div>
        );
    }
}

export default RecipeMagic;
