import { combineReducers } from 'redux';
import { filters, recipe, recipes, apiTimer } from 'modules';

export default combineReducers({ filters, recipe, recipes, apiTimer });
