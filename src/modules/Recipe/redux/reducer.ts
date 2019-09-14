import { RECIPE_TYPES } from './types';

const INITIAL_STATE: any = {
    id: ''
};

export default (state: any, action: any) => {
    switch (action.type) {
        case RECIPE_TYPES.LOAD_RECIPE_DETAILS:
            return {
                ...state,
                isLoading: true
            };
        case RECIPE_TYPES.LOAD_RECIPE_DETAILS_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            };
        case RECIPE_TYPES.LOAD_RECIPE_DETAILS_ERROR:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state || INITIAL_STATE;
    }
};
