import React, { Component } from 'react';



class DisplayResults extends Component {
    render() {
        return (
            <div>
                <tr>
                <td>{this.props.item.recipeTitle}</td>
                <td>Ready time:&nbsp;{this.props.item.readyTime}</td>
                <td>Servings:&nbsp;{this.props.item.servings}</td>
                
                </tr>
                <img src={this.props.item.image} width="150" height="150"/><br/>
            </div>
        );
    }
}

export default DisplayResults;