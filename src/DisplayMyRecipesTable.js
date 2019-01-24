import React, { Component } from 'react';
import './DisplayResultsTable.css';


class DisplayMyRecipesTable extends Component {
    render() {
        return (
            <div className="resultsDiv">
                <p>{this.props.item.recipeId}</p>
                <p>{this.props.item.title}</p>
                <p>Ready time:&nbsp;{this.props.item.readyTime}</p>
                <p>Servings:&nbsp;{this.props.item.servings}</p>
                {this.props.item.ingredients && this.props.item.method && <p>Ingredients:&nbsp;{this.props.item.ingredients}, &nbsp;Metod:&nbsp;{this.props.item.method}</p>}
                
            </div>
        );
    }
}

export default DisplayMyRecipesTable;