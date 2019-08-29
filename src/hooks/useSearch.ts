import { useState, useCallback, useMemo } from 'react';

export const useSearch: any = (initialValue: string, submitCallback: any) => {
    const [searchQuery, setSearchQuery] = useState(initialValue || '');

    const onSearchInputChange = useCallback(event => {
        const { value } = event.currentTarget || event.srcElement;
        setSearchQuery(value);
    }, []);

    const onSearchSubmit = useCallback(
        event => {
            event.preventDefault();
            submitCallback(searchQuery);
        },
        [searchQuery, submitCallback]
    );

    const api = useMemo(
        () => ({
            onSearchInputChange,
            onSearchSubmit
        }),
        [onSearchInputChange, onSearchSubmit]
    );

    const state = { searchQuery };

    return [state, api];
};
