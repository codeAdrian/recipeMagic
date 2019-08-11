import { FILTERS_TYPES } from "./types";
import { createAction, ActionUnion } from "modules/redux-store";

export const FILTERS_ACTIONS = {
  filtersLoad: () => createAction(FILTERS_TYPES.FILTERS_LOAD),

  filtersAdd: (filter: any) =>
    createAction(FILTERS_TYPES.FILTERS_ADD, {
      filter,
    }),
};

export type FiltersActions = ActionUnion<any>;
