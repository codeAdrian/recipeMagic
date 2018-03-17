import React,{Component} from "react";

class RecipeIngredients extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputValue: ""
        };

        this.changeInputValue = this.changeInputValue.bind(this);
    }

    changeInputValue(event) {
        this.setState({inputValue: event.target.value})
    }

    render() {
        return <div>
            <label>What do you have in your fridge?</label>
            <div>
                <input onChange={this.changeInputValue} placeholder="Type Ingredients To Add" />
                <button onClick={() => this.props.addIngredientsToList(this.state.inputValue)}>Add Ingredient</button>
                <input onChange = {this.props.updateSearchValue} id="recipeSearch" type="text"/>
            </div>
        </div>
    }
}

export default RecipeIngredients;