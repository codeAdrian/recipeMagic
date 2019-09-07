import { API_TIMER_TYPES } from './types';
import { createAction, ActionUnion } from 'modules/redux-store';

export const API_TIMER_ACTIONS = {
    apiTimerStart: () => createAction(API_TIMER_TYPES.API_TIMER_START),
    apiTimerReset: () => createAction(API_TIMER_TYPES.API_TIMER_RESET)
};

export type ApiTimerActions = ActionUnion<any>;
