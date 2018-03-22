import React,{Component} from "react";

class RecipeIngredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: this.props.inputValue
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({inputValue: nextProps.inputValue});
    }
            render() {
        return <div>
            <label>What do you have in your fridge?</label>
            <form>
                <input value={this.state.inputValue} onChange={this.props.changeInputValue} placeholder="Type Ingredients To Add" />
                <input type="submit" onClick={this.props.addIngredientsToList} value="Add Ingredient" />
                <input onChange = {this.props.updateSearchValue} id="recipeSearch" type="text"/>
            </form>
        </div>
    }
}

export default RecipeIngredients;