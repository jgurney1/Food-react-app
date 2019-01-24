import React from 'react';

const BrowseRecipes = (props) => {
    return (
        <div className="BrowseRecipes">
            <button onClick={props.loadRecipes}>Get All </button>
            <form onSubmit={props.removeRecipe}>
                <input type="text" name="recipeId" placeholder="enter id to remove..."/>
            <button >Remove by id</button>
            </form>
        </div>
    );
}

export default BrowseRecipes;