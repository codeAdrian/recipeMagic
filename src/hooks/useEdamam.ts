import { useCallback, useMemo } from "react";
import { RECIPE_LIST_TYPES } from "modules/RecipeList/redux/types";
import { RECIPE_TYPES } from "modules/Recipe/redux/types";
import { useDispatch } from "react-redux";
import { Ingredients } from "modules";

const API = {
  KEY: process.env.REACT_APP_EDAMAM_API_KEY,
  ID: process.env.REACT_APP_EDAMAM_API_ID,
  URL: process.env.REACT_APP_EDAMAM_API_URL,
};

export const useEdamam = () => {
  const dispatch = useDispatch();

  const handleResponse = useCallback(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }, []);

  const handleListData = useCallback(
    (data: any) =>
      dispatch({
        type: RECIPE_LIST_TYPES.LOAD_RECIPE_LIST_SUCCESS,
        payload: data,
      }),
    [],
  );

  const handleDetailsData = useCallback((data: any) => {
    dispatch({
      type: RECIPE_TYPES.LOAD_RECIPE_DETAILS_SUCCESS,
      payload: data[0],
    });
  }, []);

  const buildQuery = (filters: any) => {
    console.log("QURT", filters);
    const { searchQuery, ingredients, healthLabels, dietLabels } = filters;
    let buildQuery = searchQuery;
    if (ingredients.length > 0) {
      buildQuery = `${buildQuery},${ingredients.join(",")}`;
    }
    if (healthLabels.length > 0) {
      const healthQuery = healthLabels.join("&health=");
      buildQuery = `${buildQuery}&health=${healthQuery}`;
    }
    if (dietLabels) {
      buildQuery = `${buildQuery}&diet=${dietLabels}`;
    }
    return buildQuery;
  };

  const getRecipeList = useCallback(filters => {
    const q = buildQuery(filters);
    try {
      dispatch({ type: RECIPE_LIST_TYPES.LOAD_RECIPE_LIST });
      fetch(`${API.URL}q=${q}&app_id=${API.ID}&app_key=${API.KEY}&from=0&to=24`)
        .then(handleResponse)
        .then(handleListData)
        .catch(error => console.log(error));
    } catch (error) {
      dispatch({
        type: RECIPE_LIST_TYPES.LOAD_RECIPE_LIST_ERROR,
        payload: error,
      });
      console.log(error);
    }
  }, []);

  const getRecipeDetails = useCallback(uri => {
    try {
      dispatch({ type: RECIPE_TYPES.LOAD_RECIPE_DETAILS });
      fetch(
        `${API.URL}r=${encodeURIComponent(uri)}&app_id=${API.ID}&app_key=${
          API.KEY
        }`,
      )
        .then(handleResponse)
        .then(handleDetailsData)
        .catch(error => console.log(error));
    } catch (error) {
      dispatch({
        type: RECIPE_TYPES.LOAD_RECIPE_DETAILS_ERROR,
        payload: error,
      });
      console.log(error);
    }
  }, []);

  const api = useMemo(
    () => ({
      getRecipeList,
      getRecipeDetails,
    }),
    [getRecipeList, getRecipeDetails],
  );

  return [api];
};
