import React from 'react';

const RecipeForm = (props) => {
    return (
        <div className="RecipeInputForm">
            <form onSubmit={props.saveRecipe}>
                <input type="text" name="recipeId" placeholder="Enter id for recipe..." /><br/><br/>
                <input type="text" name="title" placeholder="Enter title..." /><br/><br/>
                <input type="text" name="readyTime" placeholder="Ready time..."/> <br/><br/>
                <input type="text" name="servings" placeholder="Servings..."/><br/><br/>
                <input type="text" name="ingredients" multiline={true} numberOfLines={5} placeholder="Ingredients..."/><br/><br/>
                <input type="text" name="method" placeholder="Method..."/><br/><br/>
                <button>Submit </button>
            </form>
        </div>
    );
}
export default RecipeForm;