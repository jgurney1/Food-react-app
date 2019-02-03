import React, { Component } from 'react';
import RecipeForm from './RecipeForm.js';
import './Stylesheets/InputRecipe.css';
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class InputRecipe extends Component {

    addRecipe = async (e) => {
        e.preventDefault();
        axios({
            url: 'http://localhost:8080/Project-api/api/recipe/addrecipe/' + localStorage.getItem("loggedIn"),
            method: 'post',
            data: {
                recipeId: e.target.elements.recipeId.value,
                title: e.target.elements.title.value,
                readyTime: e.target.elements.readyTime.value,
                servings: e.target.elements.servings.value,
                ingredients: e.target.elements.ingredients.value,
                method: e.target.elements.method.value
            }
        }).then(response => {
            toast("" + response.data.message);
        }).catch(error => console.log(error));
    }

    render () {
        return (
            
            <div className="inputRecipePage">
                <br/><br/><br/>
                <div className="inputRecipePageBody">    
                <h1> Enter your own recipes here </h1>
                <RecipeForm
                saveRecipe={this.addRecipe}
                />
                </div>
                <ToastContainer autoClose={1000}/>
            </div>
        );
    }
} 
export default InputRecipe;