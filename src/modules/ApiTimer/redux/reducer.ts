import { API_TIMER_TYPES } from './types';

const INITIAL_STATE: any = {
    isActive: false
};

export default (state: any, action: any) => {
    switch (action.type) {
        case API_TIMER_TYPES.API_TIMER_START:
            return {
                ...state,
                isActive: true
            };
        case API_TIMER_TYPES.API_TIMER_RESET:
            return {
                ...state,
                isActive: false
            };
        default:
            return state || INITIAL_STATE;
    }
};
