import React from 'react';


const TestReturned = (props) => {
    return (
        <div>
            <h4>Returned data:&nbsp; {props.data}</h4>
            <img src={props.image}/>
            

        </div>
    )
}

export default TestReturned;