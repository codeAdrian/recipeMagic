import React, { useState } from 'react';
import { dietLabels } from "../constants";
import { FILTERS_TYPES } from 'modules/Filters/redux/types';
import { useDispatch } from 'react-redux';

export const DietFilters = () => {
    const [filter, setFilters] = useState<string>();
    const dispatch = useDispatch();

    const handleInputChange = (event: any) => {
        const { value }: { value: string } = event.currentTarget || event.srcElement;
        setFilters(value || "");
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch({
            type: FILTERS_TYPES.FILTERS_ADD,
            payload: { key: "dietLabels", data: filter || [] }
        })
    }

    const handleReset = (event: any) => {
        event.preventDefault();
        setFilters("");
        dispatch({
            type: FILTERS_TYPES.FILTERS_ADD,
            payload: { key: "dietLabels", data: "" }
        })
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            {dietLabels.map(({ label, value, description }) =>
                <div key={value}>
                    <input name="filter-diet-label" onChange={handleInputChange} id={value} type="radio" value={value}></input>
                    <label htmlFor={value}>{label}</label>
                    <span>{description}</span>
                </div>
            )}
            <button type="submit">Apply filters</button>

            <button type="reset">Reset</button>
        </form>
    )
}