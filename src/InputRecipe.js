import React, { Component } from 'react';
import RecipeForm from './RecipeForm.js';
import './InputRecipe.css';

class InputRecipe extends Component {
    render () {
        return (
            <div>
                <h1> Enter your own recipes here </h1>
                <RecipeForm />
            </div>
        );
    }
} 
export default InputRecipe;