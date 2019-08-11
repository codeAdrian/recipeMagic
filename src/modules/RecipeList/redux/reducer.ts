import { RECIPE_LIST_TYPES } from "./types";

const INITIAL_STATE: any = {
  hits: [],
};

export default (state: any, action: any) => {
  switch (action.type) {
    case RECIPE_LIST_TYPES.LOAD_RECIPE_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case RECIPE_LIST_TYPES.LOAD_RECIPE_LIST_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case RECIPE_LIST_TYPES.LOAD_RECIPE_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case RECIPE_LIST_TYPES.LOAD_RECIPE_LIST_RESET:
      return INITIAL_STATE;
    default:
      return state || INITIAL_STATE;
  }
};
