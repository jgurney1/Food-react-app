import React from 'react';

const RecipeForm = (props) => {
    return (
        <div className="RecipeInputForm">
            <form>
                <input type="text" name="title" placeholder="Enter title..." /><p>Required </p>
                <input type="text" name="readtTime" placeholder="Ready time..."/><p>Required </p>
                <input type="text" name="servings" placeholder="Servings..."/><p>Required </p>
                <input type="text" name="ingredients" placeholder="Ingredients..."/><br/><br/>
                <input type="text" name="method" placeholder="Method..."/>


                <br/><br/><button>Submit </button>
            </form>
        </div>
    );
}
export default RecipeForm;