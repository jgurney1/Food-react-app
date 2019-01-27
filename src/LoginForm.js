import React from 'react';

const LoginForm = (props) => {
    return (
    <div className="loginForm">
        <form onSubmit={props.submit}>
            <input type="text" placeholder="enter username..." />
            <input type="password" placeholder="password" />
            <button>{props.buttName}</button>

        </form> 
    </div>
    );    
}

export default LoginForm;