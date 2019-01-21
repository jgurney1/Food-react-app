import React, { Component } from 'react';
import './DisplayResultsTable.css';


class DisplayResults extends Component {
    render() {
        return (
            <div>
                <tr>
                <td>{this.props.item.recipeTitle}</td>
                <td>Ready time:&nbsp;{this.props.item.readyTime}</td>
                <td>Servings:&nbsp;{this.props.item.servings}</td>
                <td><img src={this.props.item.image} width="150" height="150"/></td>
                </tr>
                
            </div>
        );
    }
}

export default DisplayResults;