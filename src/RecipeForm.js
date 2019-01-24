import React from 'react';

const RecipeForm = (props) => {
    return (
        <div className="RecipeInputForm">
            <form>
                <label>
                    Required
                <input type="text" name="title" placeholder="Enter title..." />
                <input type="text" name="readyTime" placeholder="Ready time..."/> ` `
                <input type="text" name="servings" placeholder="Servings..."/><p>Required </p>
                </label>
                <input type="text" name="ingredients" placeholder="Ingredients..."/><br/><br/>
                <input type="text" name="method" placeholder="Method..."/>


                <br/><br/><button>Submit </button>
            </form>
        </div>
    );
}
export default RecipeForm;