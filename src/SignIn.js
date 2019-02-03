import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm.js';
import './Stylesheets/SignIn.css';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class SignIn extends Component {
    
    addAccount = async (e) => {
        e.preventDefault();
        axios({
            url:'http://localhost:8080/Project-api/api/user/addAccount',
           method: 'post',
           data: {
               email: e.target.elements.email.value,
               userPassword: e.target.elements.password.value
           } 
        })
        .then(response => {
            toast("" + response.data.message);
        })
        .catch(error => console.log(error));
    }

    verifyAccount = async (e) => {
        e.preventDefault();
        const userEmail = e.target.elements.email.value;
        axios({
            url:'http://localhost:8080/Project-api/api/user/verifyAccount',
           method: 'post',
           data: {
               email: userEmail,
               userPassword: e.target.elements.password.value
           } 
        })
        .then(response => {
                if(response.data.message === "Login Successful") {
                    localStorage.setItem("loggedIn", userEmail);
                }
                toast("" + response.data.message);
        })
        .catch(error => console.log(error));
    }

    updatePassword = async (e) => {
        e.preventDefault();
        axios({
            url: 'http://localhost:8080/Project-api/api/user/updateAccount',
            method: 'put',
            data: {
               email: e.target.elements.email.value,
               userPassword: e.target.elements.password.value           
            }
        })
        .then(response => {
            toast("" + response.data.message);
        })
        .catch(error => console.log(error));
    }

    deleteAccount = async (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        axios({
            url: 'http://localhost:8080/Project-api/api/user/removeAccount/' + email,
            method: 'delete',
            
        })
        .then(response => {
            toast("" + response.data.message);
        })
        .catch(error => console.log(error));
    }


    render() {
        return (
            <div className="signInPage">
                <br/><br/>

                <LoginForm
                    header="New Users sign up here!"
                    buttName="Register"
                    submit={this.addAccount}
                /><br/>
                <LoginForm
                    header="Already got an account? Sign in here"
                    buttName="Login"
                    submit={this.verifyAccount}
                /><br/>
                <LoginForm
                    header=" Forgotten password? Enter email and a new password to reset"
                    buttName="Reset Password"
                    submit={this.updatePassword}
                /><br/>
                <LoginForm
                    header="Want to delete your account? Enter email and password of account to delete"
                    buttName="Delete Account"
                    submit={this.deleteAccount}
                />
                <ToastContainer autoClose={1000}/>
                <br/><br/><br/>
            </div>
        );
    }

}

export default SignIn;