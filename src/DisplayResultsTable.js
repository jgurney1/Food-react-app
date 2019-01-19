import React from 'react';


const DisplayResultsTable = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <h3>Ready time:&nbsp;{props.readyTime}</h3>
            <h3>Servings:&nbsp;{props.servings}</h3>
            <img src={props.image} width="150" height="150"/><br/>
            <a href={props.url} alt="Website Link not loaded or found">{props.url}</a>


        </div>
    )
}

export default DisplayResultsTable;