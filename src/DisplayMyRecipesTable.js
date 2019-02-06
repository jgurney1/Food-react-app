import React, { Component } from 'react';
import './Stylesheets/DisplayResultsTable.css';


class DisplayMyRecipesTable extends Component {
    render() {
        return (
            <div className="resultsDiv">
                <p>Recipe ID:&nbsp;{this.props.item.recipeId}</p>
                <p>{this.props.item.title}</p>
                <p>Ready time:&nbsp;{this.props.item.readyTime}</p>
                <p>Servings:&nbsp;{this.props.item.servings}</p>
                {this.props.item.ingredients && this.props.item.method && <p>Ingredients:&nbsp;{this.props.item.ingredients}, &nbsp;Method:&nbsp;{this.props.item.method}</p>}
                {this.props.item.user && <p>Added buy user:&nbsp;{this.props.item.user}</p>}
            </div>
        );
    }
}

export default DisplayMyRecipesTable;