import { RECIPE_TYPES } from './types';
import { createAction, ActionUnion } from 'modules/redux-store';

export const RECIPE_DETAILS_ACTIONS = {
  clientsRequest: () => createAction(RECIPE_TYPES.LOAD_RECIPE_DETAILS),

  clientsSuccess: (clients: any) =>
    createAction(RECIPE_TYPES.LOAD_RECIPE_DETAILS_SUCCESS, {
      clients
    }),

  clientsError: (error?: string) =>
    createAction(RECIPE_TYPES.LOAD_RECIPE_DETAILS_ERROR, { error })
};

export type RecipeActions = ActionUnion<any>;
