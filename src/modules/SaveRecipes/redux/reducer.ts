import { SAVED_RECIPES_TYPES } from './types';

const LOCALSTORAGE_SAVED_RECIPES = 'SAVED_RECIPES';

const rehydrate = () => {
    const jsonRecipes =
        localStorage.getItem(LOCALSTORAGE_SAVED_RECIPES) || '[]';
    return JSON.parse(jsonRecipes);
};

const INITIAL_STATE: any = rehydrate();

export default (state: any, action: any) => {
    switch (action.type) {
        case SAVED_RECIPES_TYPES.SAVED_RECIPES_LOAD:
            return state;
        case SAVED_RECIPES_TYPES.SAVED_RECIPES_SAVE:
            return [...action.payload];
        case SAVED_RECIPES_TYPES.SAVED_RECIPES_RESET:
            return INITIAL_STATE;
        default:
            return state || INITIAL_STATE;
    }
};
