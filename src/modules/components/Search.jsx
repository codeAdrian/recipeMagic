import React, { Component } from 'react';

class Search extends Component {
    state = {
        inputValue: ''
    };

    handleOnChange = event => {
        this.setState({ inputValue: event.target.value });
    };

    handleOnClick = () => {
        this.props.handleAddToList(this.state.inputValue);
        this.setState({ inputValue: '' });
    };

    render() {
        return (
            <div>
                <label>Ingredient</label>
                <input
                    value={this.state.inputValue}
                    onChange={this.handleOnChange}
                    id="recipeSearch"
                    type="text"
                />
                <button className="button" onClick={this.handleOnClick}>
                    Add ingredient
                </button>
            </div>
        );
    }
}

export default Search;
