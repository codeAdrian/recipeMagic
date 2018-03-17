import React, {Component} from "react";

class RecipeListElement extends Component {
    render() {
        return(
            <li>
                <h2>{this.props.recipe.title}</h2>
                <img width="200" src={this.props.recipe.image_url} alt={this.props.recipe.title} />
                <p>
                    <button onClick={this.props.getDetails}>Get recipe</button>
                </p>
            </li>
        )
    }
}

export default RecipeListElement;