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
        ingredientsList: [],
        recipeLoaded: false,
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
        const valueToRemove = event.target.value;
        let currentIngredients = this.state.ingredientsList;
        var index = currentIngredients.indexOf(valueToRemove);
        currentIngredients.splice(index, 1);

        this.setState(
            { ingredientsList: currentIngredients },
            this.searchRecipes
        );
    };

    searchRecipes = () => {
        /* ingr	no	integer	Maximum number of ingredients. Example: ingr=5 */
        let query = `https://api.edamam.com/search?q=${this.state.ingredientsList.join(
            ','
        )}&app_id=${this.appId}&app_key=${this.apiKey}`;
        if (this.state.ingredientNumber > 0) {
            query += `&ingr=${this.state.ingredientNumber}`;
        }
        axios
            .get(
                `https://api.edamam.com/search?q=${this.state.ingredientsList.join(
                    ','
                )}&app_id=${this.appId}&app_key=${this.apiKey}`
            )
            .then(response => {
                console.log('array', this.state.ingredientsList.join(','));
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
                    <div className="recipeModal">
                        <button
                            className="recipeModal__close"
                            onClick={this.handleClose}
                        >
                            <i class="fas fa-times" />
                        </button>

                        <div className="modalSection">
                            <h2 className="modalSection__title">Ingredients</h2>
                            <ul className="recipeModal__list">
                                {loadedRecipe.ingredientLines.map(
                                    (ingredient, index) => (
                                        <li
                                            className="recipeModal__listItem"
                                            key={index}
                                        >
                                            {ingredient}
                                        </li>
                                    )
                                )}
                            </ul>
                            <a
                                className="button button--cta"
                                href={loadedRecipe.url}
                                target="_blank"
                            >
                                View Recipe
                                <i class="fas fa-chevron-right" />
                            </a>
                        </div>
                        <div className="modalSection">
                            <h2 className="modalSection__title">
                                Nutrition Values
                            </h2>
                            <table className="recipeModal__table">
                                <thead>
                                    <tr>
                                        <th>Nutrient</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(loadedRecipe.totalDaily).map(
                                        key => (
                                            <tr>
                                                <td>
                                                    {
                                                        loadedRecipe.totalDaily[
                                                            key
                                                        ].label
                                                    }
                                                </td>
                                                <td>
                                                    {loadedRecipe.totalDaily[
                                                        key
                                                    ].quantity.toFixed(0)}
                                                    {
                                                        loadedRecipe.totalDaily[
                                                            key
                                                        ].unit
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : null}

                <h1>Recipe Magic</h1>
                <Search
                    handleAddToList={this.handleAddToList}
                    ingredientsList={this.state.ingredientsList}
                    updateSearchValue={this.updateSearchValue}
                />
                <label>Filter by ingredient number:</label>
                <input min="0" id="ingredientNumber" type="number" />
                {this.state.ingredientsList.map(ingredient => (
                    <button
                        className="button button--remove"
                        onClick={this.handleRemoveFromList}
                        key={ingredient}
                    >
                        <i class="fas fa-times" />
                        {ingredient}
                    </button>
                ))}
                <ul className="recipesList">
                    {recipesList.map((recipe, index) => (
                        <li
                            className="recipesList__item"
                            key={index}
                            value={index}
                            onClick={this.handleNutritionInfo}
                        >
                            <div className="recipesList__wrapper">
                                <img
                                    className="recipesList__image"
                                    src={recipe.recipe.image}
                                    alt={recipe.recipe.label}
                                />
                                <h2 className="recipesList__title">
                                    {recipe.recipe.label}
                                </h2>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default RecipeMagic;
