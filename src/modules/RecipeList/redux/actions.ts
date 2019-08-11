import { RECIPE_LIST_TYPES } from './types';
import { createAction, ActionUnion } from 'modules/redux-store';

export const RECIPE_LIST_ACTIONS = {
  recipeRequest: () => createAction(RECIPE_LIST_TYPES.LOAD_RECIPE_LIST),

  recipeSuccess: (clients: any) =>
    createAction(RECIPE_LIST_TYPES.LOAD_RECIPE_LIST_SUCCESS, {
      clients
    }),

  recipeError: (error?: string) =>
    createAction(RECIPE_LIST_TYPES.LOAD_RECIPE_LIST_ERROR, { error })
};

export type RecipeListActions = ActionUnion<any>;
