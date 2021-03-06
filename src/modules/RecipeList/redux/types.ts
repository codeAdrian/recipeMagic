enum ActionTypes {
  LOAD_RECIPE_LIST = 'RECIPE_LIST/LOAD',
  LOAD_RECIPE_LIST_SUCCESS = 'RECIPE_LIST/SUCCESS',
  LOAD_RECIPE_LIST_ERROR = 'RECIPE_LIST/ERROR',
  LOAD_RECIPE_LIST_RESET = 'RECIPE_LIST/RESET'
}

export const RECIPE_LIST_TYPES = {
  ...ActionTypes
};
