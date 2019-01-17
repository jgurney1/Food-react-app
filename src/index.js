import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyRecipes from './MyRecipes';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <ul>
                <li><h1 className="name" >NAME OF APP </h1></li>
                <li><Link className="link" to="/MyRecipes">MyRecipes</Link></li>
                <li><Link className="link" to="/">Home</Link></li>
            </ul>
            <Route exact path="/" component={App} />
            <Route path="/MyRecipes" component={MyRecipes} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
