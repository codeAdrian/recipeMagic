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
                    <div>
                        <div className="recipeModal__overlay" />
                        <div className="recipeModal">
                            <button
                                className="recipeModal__close"
                                onClick={this.handleClose}
                            >
                                <i className="fas fa-times" />
                            </button>

                            <div className="modalSection">
                                <h2 className="modalSection__title">
                                    Information
                                </h2>
                                <dl>
                                    <dt>Title: </dt>
                                    <dd>{loadedRecipe.label}</dd>

                                    <dt>Source:</dt>
                                    <dd>{loadedRecipe.source}</dd>

                                    <dt>Servings:</dt>
                                    <dd>{loadedRecipe.yield}</dd>

                                    <dt>Preparation time:</dt>
                                    <dd>{loadedRecipe.totalTime} minutes</dd>
                                </dl>
                            </div>

                            <div className="modalSection">
                                <h2 className="modalSection__title">
                                    Ingredients
                                </h2>
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
                                    <i className="fas fa-chevron-right" />
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
                                        {Object.keys(
                                            loadedRecipe.totalDaily
                                        ).map(key => (
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
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : null}

                <div>
                    <h1>Recipe Magic</h1>
                    <Search
                        handleAddToList={this.handleAddToList}
                        ingredientsList={this.state.ingredientsList}
                        updateSearchValue={this.updateSearchValue}
                    />
                </div>
                {this.state.ingredientsList.length > 0 ? (
                    <div className="columnsWrapper">
                        <aside className="columnsWrapper__sidebar">
                            <label>Max number of ingredients:</label>
                            <input
                                min="0"
                                id="ingredientNumber"
                                type="number"
                                onChange={this.handleIngredientNumber}
                            />
                            {this.state.ingredientsList.map(ingredient => (
                                <button
                                    className="button button--remove"
                                    value={ingredient}
                                    onClick={this.handleRemoveFromList}
                                    key={ingredient}
                                >
                                    <i className="fas fa-times" />
                                    {ingredient}
                                </button>
                            ))}
                        </aside>
                        <main className="columnsWrapper__content">
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
                                                {recipe.recipe.label.length >
                                                40 ? (
                                                    <small>
                                                        {recipe.recipe.label}
                                                    </small>
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
                ) : null}
            </div>
        );
    }
}

export default RecipeMagic;
