import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FILTERS_TYPES } from 'modules/Filters/redux/types';

export const Ingredients = () => {
    const dispatch = useDispatch();
    const ingredients = useSelector((state: any) => state.filters.ingredients);
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = useCallback((event: any) => {
        const { value } = event.currentTarget || event.srcElement;
        setInputValue(value);
    }, [setInputValue]);

    const handleRemove = useCallback((event) => {
        const { value } = event.currentTarget || event.srcElement;
        const newValues = ingredients.filter((ingredient: string) => ingredient !== value);
        dispatch({
            type: FILTERS_TYPES.FILTERS_ADD,
            payload: { key: "ingredients", data: newValues }
        });
    }, [ingredients]);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        dispatch({
            type: FILTERS_TYPES.FILTERS_ADD,
            payload: { key: "ingredients", data: [...ingredients, inputValue] }
        });
        setInputValue("");
    }, [ingredients, inputValue])
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} value={inputValue} type="text"></input>
                <button type="submit">Add ingredient</button>
            </form>
            <div>
                {ingredients.map((ingredient: string, key: number) => <button value={ingredient} onClick={handleRemove} key={key}>{ingredient}</button>)}
            </div>
        </>
    )
} 