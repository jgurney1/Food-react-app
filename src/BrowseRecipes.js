import React from 'react';

const BrowseRecipes = (props) => {
    return (
        <div className="BrowseRecipes">
            <button onClick={props.loadRecipes}>Get All </button>
        </div>
    );
}

export default BrowseRecipes;