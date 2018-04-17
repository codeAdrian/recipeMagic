import React from 'react';

const Search = ({ updateSearchValue }) => (
    <div>
        <label>What do you have in your fridge?</label>
        <input onChange={updateSearchValue} id="recipeSearch" type="text" />
    </div>
);
export default Search;
