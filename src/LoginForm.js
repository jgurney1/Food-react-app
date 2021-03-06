import React from 'react';

const LoginForm = (props) => {
    return (
    <div className="loginForm">
        <form onSubmit={props.submit}>
            <h3>{props.header}</h3>
            <input type="text" name="email" placeholder="enter username..." required/>
            <input type="password" name="password" placeholder="password" required/>
            <button>{props.buttName}</button>
            <br/><br/>
        </form> 
    </div>
    );    
}

export default LoginForm;