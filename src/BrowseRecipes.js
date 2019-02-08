import React from 'react';

const BrowseRecipes = (props) => {
    return (
        <div className="BrowseRecipes">
            <button onClick={props.loadRecipes}>Refresh </button>
            <button onClick={props.myRecipes}>Show my recipes</button>
            <form onSubmit={props.removeRecipe}>
                <input type="number" name="recipeId" placeholder="enter id to remove..."/>
            <button >Remove by id</button>
            
            </form>
        </div>
    );
}

export default BrowseRecipes;