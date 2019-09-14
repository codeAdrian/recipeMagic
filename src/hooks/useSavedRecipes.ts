import { useCallback, useMemo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SAVED_RECIPES_TYPES } from 'modules';

const LOCALSTORAGE_SAVED_RECIPES = 'SAVED_RECIPES';

type Hook = () => any;

export const useSavedRecipes: Hook = () => {
    const dispatch = useDispatch();
    const savedRecipes = useSelector((state: any) => state.savedRecipes);

    const setItem = useCallback(
        data => {
            localStorage.setItem(
                LOCALSTORAGE_SAVED_RECIPES,
                JSON.stringify(data)
            );
            dispatch({
                type: SAVED_RECIPES_TYPES.SAVED_RECIPES_SAVE,
                payload: data
            });
        },
        [dispatch]
    );

    const clear = useCallback(() => {
        localStorage.removeItem(LOCALSTORAGE_SAVED_RECIPES);
        dispatch({
            type: SAVED_RECIPES_TYPES.SAVED_RECIPES_RESET
        });
    }, [dispatch]);

    const state = {
        savedRecipes
    };

    const api = useMemo(
        () => ({
            setItem,
            clear
        }),
        [setItem, clear]
    );

    return [state, api];
};
