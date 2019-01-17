import React from 'react';

const RecipeSearchForm = (props) => {
    return (
        <div className="RecipeSearchForm">
            <form onSubmit={props.loadData}>
                <input type="text" name="dish" placeholder="Enter dish..." />
                <button>Search</button>
            </form>
            <button onClick={props.loadUrl}>With Links </button>
        </div>
    );
}

export default RecipeSearchForm;