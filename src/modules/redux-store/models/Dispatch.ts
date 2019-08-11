import { Action } from '..';
import { ThunkDispatch } from 'redux-thunk';

/** Dispatch implementation that supports ThunkDispatch */
export type Dispatch = ThunkDispatch<any, null, Action<any>>;
