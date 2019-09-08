import { useCallback, useMemo } from 'react';

export const useSavedRecipes = () => {
    const setItem = useCallback(
        data => localStorage.setItem('savedRecipes', data),
        []
    );

    const getItem = useCallback(() => {
        const jsonRecipes = localStorage.getItem('savedRecipes') || '[]';
        return JSON.parse(jsonRecipes);
    }, []);

    const clear = useCallback(
        () => localStorage.removeItem('savedRecipes'),
        []
    );

    const api = useMemo(
        () => ({
            setItem,
            getItem,
            clear
        }),
        [setItem, getItem, clear]
    );

    return api;
};
