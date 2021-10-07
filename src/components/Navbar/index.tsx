import React from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Home from '../../pages/Home'
import Register from '../../pages/Register'
import Create from '../../pages/Create'
import Wallet from '../Wallet'
import styles from './Navbar.module.css'
import NavbarItem from './NavbarItem'
function Navbar() {
    return (
        <Router>
            <div>
                <nav>
                    <ul className={styles.test}>
                        <NavbarItem navName = {"MarketPlace"} navPath = {"/"}/>
                        <NavbarItem navName = {"Create NFTs"} navPath = {"/create"}/>
                        <NavbarItem navName = {"Resource Center"} navPath = {"/register"}/>
                        <li><Wallet /></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/create">
                        <Create />
                    </Route>
                </Switch>
            </div>
            
        </Router>
    )
}

export default Navbar;
