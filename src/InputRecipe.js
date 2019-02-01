import React, { Component } from 'react';
import RecipeForm from './RecipeForm.js';
import './Stylesheets/InputRecipe.css';
import axios from 'axios';

class InputRecipe extends Component {

    addRecipe = async (e) => {
        e.preventDefault();
        console.log(e.target.elements.ingredients.value);
        axios({
            url: 'http://localhost:8081/Project-api/api/recipe/addrecipe/1',
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
            console.log(response);
        }).catch(error => console.log(error));
    }

    render () {
        return (
            <div className="inputRecipePage">
                <h1> Enter your own recipes here </h1>
                <RecipeForm
                saveRecipe={this.addRecipe}
                />
            </div>
        );
    }
} 
export default InputRecipe;