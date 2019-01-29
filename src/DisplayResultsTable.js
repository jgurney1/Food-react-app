import React, { Component } from 'react';
import './DisplayResultsTable.css';
import axios from 'axios';

class DisplayResultsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipeId: this.props.item.recipeId,
            title: this.props.item.recipeTitle,
            readyTime: this.props.item.readyTime,
            servings: this.props.item.servings           
        }
    }
    
    handleChange = async () => {
    axios({
        
      url: 'http://localhost:8081/Project-api/api/recipe/addrecipe/1',
      method: 'post',
      data: {
        recipeId: this.state.recipeId,
        title: this.state.title,
        readyTime: this.state.readyTime,
        servings: this.state.servings
      }
    }).then(response => {
      console.log(response);
    }).catch(error => console.log(error));        
    }


    render() {
        return (
            <div className="resultsDiv" onClick={this.handleChange}>
                <p name="recipeId">{this.props.item.recipeId} </p>
                <p name="title">{this.props.item.recipeTitle}</p>
                <p name="readyTime">{this.props.item.readyTime}</p>
                <p name="servings">{this.props.item.servings}</p>
                <img src={this.props.item.image} width="150" height="150" alt="food"/>
                
            </div>
        );
    }
}

export default DisplayResultsTable;