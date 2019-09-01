import { useState, useCallback, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useSearch: any = (submitCallback: any) => {
    const initialValue = useSelector((state: any) => state.filters.searchQuery);
    const [searchQuery, setSearchQuery] = useState<string>(initialValue);

    useEffect(() => {
        if (initialValue !== searchQuery) {
            setSearchQuery(initialValue);
        }
    }, [initialValue]);

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

    const state = { searchQuery: searchQuery };

    return [state, api];
};
