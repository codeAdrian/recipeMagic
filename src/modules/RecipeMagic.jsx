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

    handleNutritionInfo = event => {
        const { value } = event.target;

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
                <table>
                    <thead>
                        <tr>
                            <th>Nutrient</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(loadedRecipe).length !== 0
                            ? Object.keys(loadedRecipe.totalDaily).map(key => (
                                  <tr>
                                      <td>
                                          {loadedRecipe.totalDaily[key].label}
                                      </td>
                                      <td>
                                          {loadedRecipe.totalDaily[
                                              key
                                          ].quantity.toFixed(0)}
                                          {loadedRecipe.totalDaily[key].unit}
                                      </td>
                                  </tr>
                              ))
                            : null}
                    </tbody>
                </table>
                <h1>Recipe Magic</h1>
                <Search
                    handleAddToList={this.handleAddToList}
                    ingredientsList={this.state.ingredientsList}
                    updateSearchValue={this.updateSearchValue}
                />
                {this.state.ingredientsList.map(ingredient => (
                    <button
                        onClick={this.handleRemoveFromList}
                        key={ingredient}
                    >
                        {ingredient}
                    </button>
                ))}
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
                            <a href={recipe.recipe.url} target="_blank">
                                View Recipe
                            </a>
                            <button
                                onClick={this.handleNutritionInfo}
                                value={index}
                            >
                                Nutritional Info
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default RecipeMagic;
