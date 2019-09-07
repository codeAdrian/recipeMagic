import { useCallback, useMemo } from 'react';
import { RECIPE_TYPES, RECIPE_LIST_TYPES, API_TIMER_TYPES } from 'modules';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const API = {
    KEY: process.env.REACT_APP_EDAMAM_API_KEY,
    ID: process.env.REACT_APP_EDAMAM_API_ID,
    URL: process.env.REACT_APP_EDAMAM_API_URL
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
                payload: data
            }),
        []
    );

    const handleDetailsData = useCallback((data: any) => {
        dispatch({
            type: RECIPE_TYPES.LOAD_RECIPE_DETAILS_SUCCESS,
            payload: data[0]
        });
    }, []);

    const buildFromToQuery = (page: number) => {
        const from = (page - 1) * 24;
        const to = page * 24;
        return `&from=${from}&to=${to}`;
    };

    const buildQuery = (filters: any) => {
        const {
            searchQuery,
            ingredients,
            healthLabels,
            dietLabels,
            currentPage
        } = filters;
        const fromTo = buildFromToQuery(currentPage);
        let buildQuery = `q=${searchQuery}`;
        if (ingredients.length > 0) {
            const withSearchQuery = searchQuery ? `${buildQuery},` : buildQuery;
            buildQuery = `${withSearchQuery}${ingredients.join(',')}`;
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
    };

    const getRecipeList = useCallback(filters => {
        const q = buildQuery(filters);
        dispatch({ type: RECIPE_LIST_TYPES.LOAD_RECIPE_LIST });
        dispatch({ type: API_TIMER_TYPES.API_TIMER_START });

        try {
            fetch(
                `${API.URL}${q}&app_id=${API.ID}&app_key=${API.KEY}&from=0&to=24`
            )
                .then(handleResponse)
                .then(handleListData)
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
    }, []);

    const getRecipeDetails = useCallback(uri => {
        try {
            dispatch({ type: RECIPE_TYPES.LOAD_RECIPE_DETAILS });
            fetch(
                `${API.URL}r=${encodeURIComponent(uri)}&app_id=${
                    API.ID
                }&app_key=${API.KEY}`
            )
                .then(handleResponse)
                .then(handleDetailsData)
                .catch(error => {
                    console.error('ERROR', error);
                    return toast.error(error, {
                        position: toast.POSITION.TOP_RIGHT,
                        draggable: false
                    });
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
    }, []);

    const api = useMemo(
        () => ({
            getRecipeList,
            getRecipeDetails
        }),
        [getRecipeList, getRecipeDetails]
    );

    return [api];
};
