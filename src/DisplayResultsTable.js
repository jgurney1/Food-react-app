import React, { Component } from 'react';
import './Stylesheets/DisplayResultsTable.css';
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
        console.log(this.props.item.recipeTitle);
    axios({ 
      url: 'http://localhost:8081/Project-api/api/recipe/addrecipe/'+ this.props.item.recipeId,
      method: 'post',
      data: {
        recipeId: this.props.item.recipeId,
        title: this.props.item.recipeTitle,
        readyTime: this.props.item.readyTime,
        servings: this.props.item.servings
      }
    }).then(response => {
      console.log(response.data);
    }).catch(error => console.log(error));        
    }

    render() {
        return (
            <div className="resultsDiv" onClick={this.handleChange}>
                <p name="recipeId">Recipe ID:&nbsp;{this.props.item.recipeId} </p>
                <p name="title">{this.props.item.recipeTitle}</p>
                <p name="readyTime">Ready Time:&nbsp;{this.props.item.readyTime}</p>
                <p name="servings">Servings:&nbsp;{this.props.item.servings}</p>
                <img src={this.props.item.image} width="150" height="150" alt="food"/>
                
            </div>
        );
    }
}

export default DisplayResultsTable;
