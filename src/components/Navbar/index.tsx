import React from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Home from '../../pages/Home'
import Register from '../../pages/Register'
import Create from '../../pages/Create'
import Wallet from '../Wallet'
import styles from './Navbar.module.css'
import NavbarItem from './NavbarItem'
import logo from '../../assets/spaceLogo.png'
function Navbar() {
    return (
        <Router>
            <div>
                
                <nav className={styles.spaceNav}>
                    <a href="">
                        <img src={logo} alt="mmtuts logo"/>
                    </a>
                    <ul className={styles.spaceUnorderList}>
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
