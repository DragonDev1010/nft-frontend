import React from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom'
import { Button } from 'react-bootstrap';

function Navbar() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <p>Route Home</p>
                    </Route>
                    <Route path="/register">
                        <p>Route register</p>
                    </Route>
                </Switch>
            </div>
            
        </Router>
    )
}

export default Navbar;
