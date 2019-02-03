import React, { Component } from 'react';
import './Stylesheets/DisplayResultsTable.css';
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
      url: 'http://localhost:8080/Project-api/api/recipe/addrecipe/'+ localStorage.getItem("loggedIn"),
      method: 'post',
      data: {
        recipeId: this.props.item.recipeId,
        title: this.props.item.recipeTitle,
        readyTime: this.props.item.readyTime,
        servings: this.props.item.servings
      }
    }).then(response => {
      toast("" + response.data.message);
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
                <ToastContainer autoClose={1000}/>
            </div>
        );
    }
}

export default DisplayResultsTable;
