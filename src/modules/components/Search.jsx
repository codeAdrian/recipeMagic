import React, { Component } from 'react';

class Search extends Component {
    state = {
        inputValue: ''
    };

    handleOnChange = event => {
        const inputValue = event.target.value;
        const lastCharacter = inputValue[inputValue.length - 1];
        lastCharacter !== ','
            ? this.setState({ inputValue: event.target.value })
            : this.handleOnClick();
    };

    handleOnClick = event => {
        if (event) event.preventDefault();
        this.props.handleAddToList(this.state.inputValue);
        this.setState({ inputValue: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleOnClick}>
                <input
                    value={this.state.inputValue}
                    onChange={this.handleOnChange}
                    placeholder="Chicken, potato, beans"
                    id="recipeSearch"
                    type="text"
                />
                <button
                    className="button button--cta"
                    onClick={this.handleOnClick}
                >
                    Add ingredient
                </button>
            </form>
        );
    }
}

export default Search;
