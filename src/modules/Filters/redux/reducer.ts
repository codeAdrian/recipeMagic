import { FILTERS_TYPES } from './types';
import qs from 'qs';

const PARSED_QUERY_STRING = qs.parse(window.location.search.slice(1));

console.log('PARSED', PARSED_QUERY_STRING);

const INITIAL_STATE: any = {
    isLoading: true,
    searchQuery: '',
    ingredients: [],
    healthLabels: [],
    dietLabels: '',
    currentPage: '1',
    ...PARSED_QUERY_STRING
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
                currentPage: '1',
                [action.payload.key]: action.payload.data
            };
        case FILTERS_TYPES.FILTERS_RESET:
            return INITIAL_STATE;
        default:
            return state || INITIAL_STATE;
    }
};
