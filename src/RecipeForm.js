import React from 'react';

const RecipeForm = (props) => {
    return (
        <div className="RecipeInputForm">
            <form onSubmit={props.saveRecipe}>
                <input type="number" name="recipeId" placeholder="Enter id for recipe..." /><br/><br/>
                <input type="text" name="title" placeholder="Enter title..." /><br/><br/>
                <input type="number" name="readyTime" placeholder="Ready time..."/> <br/><br/>
                <input type="number" name="servings" placeholder="Servings..."/><br/><br/>
                <input type="text" name="ingredients" placeholder="Ingredients..."/><br/><br/>
                <input type="text" name="method" placeholder="Method..."/><br/><br/>
                <button>Submit </button>
            </form>
        </div>
    );
}
export default RecipeForm;