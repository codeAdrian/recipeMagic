import React, { useState } from 'react';
import { healthLabels } from "../constants";
import { FILTERS_TYPES } from 'modules/Filters/redux/types';
import { useDispatch } from 'react-redux';

export const HealthFilters = () => {
    const [filters, setFilters] = useState<string[]>([]);
    const dispatch = useDispatch();

    const handleInputChange = (event: any) => {
        const { value, checked }: { value: string, checked: boolean } = event.currentTarget || event.srcElement;
        let newValue = filters;
        if (checked) {
            newValue.push(value);
        } else {
            newValue = filters.filter((item) => item !== value);
        }
        setFilters(newValue);
        console.log("HL", { filters, value, checked });
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch({
            type: FILTERS_TYPES.FILTERS_ADD,
            payload: { key: "healthLabels", data: filters || [] }
        })
    }

    const handleReset = (event: any) => {
        event.preventDefault();
        setFilters([]);
        dispatch({
            type: FILTERS_TYPES.FILTERS_ADD,
            payload: { key: "healthLabels", data: [] }
        })
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            {healthLabels.map(({ label, value, description }) =>
                <div key={value}>
                    <input onChange={handleInputChange} id={value} type="checkbox" value={value}></input>
                    <label htmlFor={value}>{label}</label>
                    <span>{description}</span>
                </div>
            )}
            <button type="submit">Apply filters</button>

            <button type="reset">Reset</button>
        </form>
    )
}