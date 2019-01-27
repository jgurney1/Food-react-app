import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm.js';

class SignIn extends Component {

    state = {
        userName: undefined,
        password: undefined
    }
    
    addAccount = async () => {
        axios.post("")
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log(error));
    }

    verifyAccount = async () => {
        axios.get("")
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log(error));
    }


    render() {
        return (
            <div>
                <h3> New Users sign up here! </h3>
                <LoginForm
                    buttName="Register"
                    submit={this.addAccount}
                />
                <h3> Already got an account? Sign in here</h3>
                <LoginForm
                    buttName="Login"
                    submit={this.verifyAccount}
                />
            </div>
        );
    }

}

export default SignIn;