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
        page: 0,
        totalPages: 0,
        isLoading: false,
        modalActive: false,
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
        const totalPages = Math.ceil(response.data.count / 12);
        this.setState({ recipesList: recipesList, totalPages: totalPages });
    };

    handleAddToList = value => {
        let currentIngredients = this.state.ingredientsList;
        currentIngredients.push(value);
        this.setState(
            { ingredientsList: currentIngredients, page: 0 },
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
                { ingredientsList: currentIngredients, page: 0 },
                this.searchRecipes
            );
        }
    };

    handleIngredientNumber = event => {
        const value = event.currentTarget.value;
        this.setState({ ingredientNumber: value, page: 0 }, this.searchRecipes);
    };

    searchRecipes = () => {
        const pageStart = 12 * this.state.page;
        const pageEnd = 12 + pageStart;

        this.setState({ isLoading: true }, () => {
            let query = `https://api.edamam.com/search?q=${this.state.ingredientsList.join(
                ','
            )}&app_id=${this.appId}&app_key=${
                this.apiKey
            }&from=${pageStart}&to=${pageEnd}`;
            if (this.state.ingredientNumber > 0) {
                query += `&ingr=${this.state.ingredientNumber}`;
            }
            console.log(query);
            axios.get(query).then(response => {
                this.setState({ isLoading: false });
                this.handleSearchRequest(response);
            });
        });
    };

    handleClose = () => {
        this.setState({ modalActive: false });
    };

    handleNutritionInfo = event => {
        const { value } = event.currentTarget;

        this.setState({
            loadedRecipe: this.state.recipesList[value].recipe,
            modalActive: true
        });
    };

    handlePageChange = event => {
        const diff = parseInt(event.currentTarget.value, 10);
        const currentPage = this.state.page;

        if (diff === -1 && currentPage > 0) {
            this.setState({ page: currentPage - 1 }, this.searchRecipes);
        } else if (diff === 1) {
            this.setState({ page: currentPage + 1 }, this.searchRecipes);
        } else {
            this.setState({ page: currentPage });
        }
    };

    render() {
        const loadedRecipe = this.state.loadedRecipe;

        return (
            <div>
                <RecipeDetails
                    modalActive={this.state.modalActive}
                    handleClose={this.handleClose}
                    loadedRecipe={loadedRecipe}
                    ingredientsList={this.state.ingredientsList}
                />

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
                        page={this.state.page}
                        isLoading={this.state.isLoading}
                        totalPages={this.state.totalPages}
                        handlePageChange={this.handlePageChange}
                        handleIngredientNumber={this.handleIngredientNumber}
                        handleRemoveFromList={this.handleRemoveFromList}
                        ingredientsList={this.state.ingredientsList}
                        recipesList={this.state.recipesList}
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
