import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm.js';

class SignIn extends Component {

    state = {
        userName: undefined,
        password: undefined
    }
    
    addAccount = async (e) => {
        e.preventDefault();
        axios({
            url:'http://localhost:8081/Project-api/api/user/addAccount',
           method: 'post',
           data: {
               email: e.target.elements.email.value,
               userPassword: e.target.elements.password.value
           } 
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error));
    }

    verifyAccount = async (e) => {
        e.preventDefault();
        axios({
            url:'http://localhost:8081/Project-api/api/user/verifyAccount',
           method: 'post',
           data: {
               email: e.target.elements.email.value,
               userPassword: e.target.elements.password.value
           } 
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error));
    }

    updatePassword = async (e) => {
        e.preventDefault();
        axios({
            url: 'http://localhost:8081/Project-api/api/user/updateAccount',
            method: 'put',
            data: {
               email: e.target.elements.email.value,
               userPassword: e.target.elements.password.value           
            }
        })
        .then(response => {
            console.log(response.data);
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
                <h4> Forgotten password? Enter email and a new password to reset</h4>
                <LoginForm
                    buttName="Reset Password"
                    submit={this.updatePassword}
                />
            </div>
        );
    }

}

export default SignIn;