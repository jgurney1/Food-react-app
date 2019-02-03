import React from 'react';
import ReactDOM from 'react-dom';
import './Stylesheets/index.css';
import App from './App';
import MyRecipes from './MyRecipes';
import InputRecipe from './InputRecipe';
import SignIn from './SignIn.js';
import trex from'./tea-rex.png';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <ul>
                <li><img className="name" src={trex} height="90" width="90" alt="page logo"/></li>
                <li><h1 className="name" >IT'S TEA_REX TIME </h1></li>
                <li><Link className="link" to="/InputRecipe">Input Recipe</Link></li>
                <li><Link className="link" to="/MyRecipes">My Recipes</Link></li>
                <li><Link className="link" to="/">Home</Link></li>
                
            </ul>
            <ul className="loginList">
                <li><Link className="login" to="/SignIn">Login</Link></li>
            </ul>
            <Route path="/SignIn" component={SignIn} />
            <Route path="/InputRecipe" component={InputRecipe} />
            <Route exact path="/" component={App} />
            <Route path="/MyRecipes" component={MyRecipes} />
            {localStorage.setItem("loggedIn", "Guest")}
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
