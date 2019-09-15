import { useCallback, useMemo } from 'react';
import { RECIPE_TYPES, RECIPE_LIST_TYPES, API_TIMER_TYPES } from 'modules';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const API = {
    KEY: process.env.REACT_APP_EDAMAM_API_KEY,
    ID: process.env.REACT_APP_EDAMAM_API_ID,
    URL: process.env.REACT_APP_EDAMAM_API_URL
};

export const useEdamam = () => {
    const dispatch = useDispatch();
    const query = useSelector((state: any) => state.recipes.query);
    const id = useSelector((state: any) => state.recipe.id);

    const handleResponse = useCallback(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }, []);

    const handleListData = useCallback(
        ({ data, query }: any) =>
            dispatch({
                type: RECIPE_LIST_TYPES.LOAD_RECIPE_LIST_SUCCESS,
                payload: { ...data, query }
            }),
        [dispatch]
    );

    const handleDetailsData = useCallback(
        ({ data, id }: any) => {
            dispatch({
                type: RECIPE_TYPES.LOAD_RECIPE_DETAILS_SUCCESS,
                payload: { ...data[0], id }
            });
        },
        [dispatch]
    );

    const buildFromToQuery = useCallback((page: number) => {
        const from = (page - 1) * 24;
        const to = page * 24;
        return `&from=${from}&to=${to}`;
    }, []);

    const buildQuery = useCallback(
        (filters: any) => {
            const {
                searchQuery,
                ingredients,
                healthLabels,
                dietLabels,
                currentPage
            } = filters;
            const fromTo = buildFromToQuery(currentPage);
            let buildQuery = `${searchQuery}`;
            if (ingredients.length > 0) {
                buildQuery = `${buildQuery},${ingredients.join(',')}`;
            }
            if (healthLabels.length > 0) {
                const healthQuery = healthLabels.join('&health=');
                buildQuery = `${buildQuery}&health=${healthQuery}`;
            }
            if (dietLabels) {
                buildQuery = `${buildQuery}&diet=${dietLabels}`;
            }

            buildQuery = `${buildQuery}${fromTo}`;
            return buildQuery;
        },
        [buildFromToQuery]
    );

    const getRecipeList = useCallback(
        filters => {
            const q = buildQuery(filters);

            if (q === query) {
                return;
            }

            dispatch({ type: RECIPE_LIST_TYPES.LOAD_RECIPE_LIST });
            dispatch({ type: API_TIMER_TYPES.API_TIMER_START });

            try {
                fetch(
                    `${API.URL}q=${q}&app_id=${API.ID}&app_key=${API.KEY}&from=0&to=24`
                )
                    .then(handleResponse)
                    .then((data: any) => handleListData({ data, query: q }))
                    .catch(() => {
                        toast.error(
                            `Could not get the yummy recipes. Please refresh and try again 🙁`,
                            {
                                position: toast.POSITION.BOTTOM_RIGHT,
                                draggable: false
                            }
                        );
                    });
            } catch (error) {
                console.error('ERROR', error);
                dispatch({
                    type: RECIPE_LIST_TYPES.LOAD_RECIPE_LIST_ERROR,
                    payload: error
                });
                return toast.error(error, {
                    position: toast.POSITION.TOP_RIGHT,
                    draggable: false
                });
            }
        },
        [dispatch, buildQuery, handleListData, handleResponse, query]
    );

    const getRecipeDetails = useCallback(
        uri => {
            if (id === uri) {
                return;
            }

            try {
                dispatch({ type: RECIPE_TYPES.LOAD_RECIPE_DETAILS });
                fetch(
                    `${API.URL}r=${encodeURIComponent(uri)}&app_id=${
                        API.ID
                    }&app_key=${API.KEY}`
                )
                    .then(handleResponse)
                    .then(data => handleDetailsData({ data, id: uri }))
                    .catch(() => {
                        toast.error(
                            `Could not load the recipe. Please refresh and try again 🙁`,
                            {
                                position: toast.POSITION.BOTTOM_RIGHT,
                                draggable: false
                            }
                        );
                    });
            } catch (error) {
                console.error('ERROR', error);
                dispatch({
                    type: RECIPE_TYPES.LOAD_RECIPE_DETAILS_ERROR,
                    payload: error
                });
                return toast.error(error, {
                    position: toast.POSITION.TOP_RIGHT,
                    draggable: false
                });
            }
        },
        [dispatch, handleDetailsData, handleResponse, id]
    );

    const api = useMemo(
        () => ({
            getRecipeList,
            getRecipeDetails
        }),
        [getRecipeList, getRecipeDetails]
    );

    return [api];
};
