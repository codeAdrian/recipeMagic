import { FILTERS_TYPES } from './types';

const INITIAL_STATE: any = {
    isLoading: true,
    searchQuery: '',
    ingredients: [],
    healthLabels: [],
    dietLabels: ''
};

export default (state: any, action: any) => {
    switch (action.type) {
        case FILTERS_TYPES.FILTERS_LOAD:
            return {
                ...state,
                isLoading: true
            };
        case FILTERS_TYPES.FILTERS_ADD:
            return {
                ...state,
                isLoading: false,
                [action.payload.key]: action.payload.data
            };
        case FILTERS_TYPES.FILTERS_RESET:
            return INITIAL_STATE;
        default:
            return state || INITIAL_STATE;
    }
};
