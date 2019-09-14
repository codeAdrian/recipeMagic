import { combineReducers } from 'redux';
import { filters, recipe, recipes, apiTimer, savedRecipes } from 'modules';

export default combineReducers({
    filters,
    recipe,
    recipes,
    apiTimer,
    savedRecipes
});
