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
import { useWeb3React } from "@web3-react/core"
// import logo from '../../assets/logo-dark.jpg'
// import logo from '../../assets/logo-light.jpg'
function Navbar() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()
    console.log('Web3React Test: ', active, account)
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
                    {active ? <NavbarItem navName = {"User"} navPath = {"/user"}/> :  <li className={styles.navListItem}><Wallet /></li>}
                    
                    
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
