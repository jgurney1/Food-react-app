import React, { Component } from 'react';
import './DisplayResultsTable.css';


class DisplayResultsTable extends Component {
    render() {
        return (
            <div className="resultsDiv">
                <p>{this.props.item.recipeTitle}</p>
                <p>Ready time:&nbsp;{this.props.item.readyTime}</p>
                <p>Servings:&nbsp;{this.props.item.servings}</p>
                <img src={this.props.item.image} width="150" height="150"/>
                
            </div>
        );
    }
}

export default DisplayResultsTable;