import React, { Component } from 'react';

class SignIn extends Component {

    state = {
        userName: undefined,
        password: undefined
    }
    
    render() {
        return (
            <div>
                <h3> Sign-in page </h3>
                <form className="signIn">
                    <input type="text" placeholder="enter username..."/>
                    <input type="password" placeholder="password" />
                    <button>Submit</button>

                </form>
                <h3> New Users sign in here!</h3>
                <form className="signUp">
                    <input type="text" placeholder="enter username..."/>
                    <input type="password" placeholder="password" />
                    <button>Register</button>

                </form>
            </div>
        );
    }

}

export default SignIn;