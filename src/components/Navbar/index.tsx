import React from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Home from '../../pages/Marketplace'
import Register from '../../pages/Register'
import Create from '../../pages/Create'
import Wallet from '../Wallet'
import styles from './Navbar.module.css'
import NavbarItem from './NavbarItem'
import NavFilter from './NavFilter';
import logo from '../../assets/spaceLogo.png'
function Navbar() {
    return (
        <Router>
            <nav className={styles.spaceNav}>
                <a href="" className={styles.logo}>
                    <img src={logo} alt="mmtuts logo"/>
                </a>
                <NavFilter />
                <ul className={styles.navItemList}>
                    <NavbarItem navName = {"MarketPlace"} navPath = {"/"}/>
                    <NavbarItem navName = {"Create NFTs"} navPath = {"/create"}/>
                    <NavbarItem navName = {"Resource Center"} navPath = {"/register"}/>
                    <li className={styles.navListItem}><Wallet /></li>
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
        </Router>
    )
}

export default Navbar;
