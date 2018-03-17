import React, {Component} from "react";

class RecipeDetails extends Component {
    render() {
        return(
            <div>
                <h2>
                    {this.props.recipe.title}
                </h2>
                <div>
                    <button onClick={this.props.handleClose}>Close</button>
                </div>
                <p>From: <a target="_blank" rel="noopener noreferrer"  href={this.props.recipe.publisher_url}>{this.props.recipe.publisher}</a></p>
                <ul>
                    {this.props.recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li> )}
                </ul>
                <a target="_blank" rel="noopener noreferrer" href={this.props.recipe.source_url}>Preparation Instructions</a>
            </div>
        )
    }
}

export default RecipeDetails;