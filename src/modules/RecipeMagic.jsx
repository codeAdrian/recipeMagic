import React, { Component } from 'react';
import { Search } from './components';
import axios from 'axios';

class RecipeMagic extends Component {
    searchTimeout = null;
    searchTimeoutValue = 500;
    apiKey = '9d87cb9ebbfba0778158ac0ef5ba279a';
    appId = '7aa82991';

    state = {
        searchValue: '',
        recipesList: [],
        recipeLoaded: false
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

    searchRecipes = () => {
        axios
            .get(
                `https://api.edamam.com/search?q=${
                    this.state.searchValue
                }&app_id=${this.appId}&app_key=${this.apiKey}`
            )
            .then(this.handleSearchRequest);
    };

    render() {
        const recipesList = this.state.recipesList;
        return (
            <div>
                <h1>Recipe Magic</h1>
                <Search updateSearchValue={this.updateSearchValue} />
                <ul>
                    {recipesList.map((recipe, index) => (
                        <li key={index}>
                            <img
                                src={recipe.recipe.image}
                                alt={recipe.recipe.label}
                            />
                            <h2>{recipe.recipe.label}</h2>
                            <ul>
                                {recipe.recipe.ingredientLines.map(
                                    (ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    )
                                )}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default RecipeMagic;
