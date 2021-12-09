// import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import Footer from '../Footer'
import Home from '../../pages/Home'
import Marketplace from '../../pages/Marketplace'
import Create from '../../pages/Create'
import Register from '../../pages/Register'
import Nft from '../../pages/Nft'
import User from '../../pages/User'
import styles from './Navbar.module.css'
import NavbarItem from './NavbarItem'
import NavSearch from './NavSearch';
import Alert from '../Alert'
// import { useWeb3React } from "@web3-react/core"
// import logo from '../../assets/spaceLogo.png'
import logo from '../../assets/starseas-final-001.png'
// import logo from '../../assets/logo-light.jpg'
function Navbar(props: any) {
    // const { active, account, library, connector, activate, deactivate } = useWeb3React()
    return (
        <Router>
            <nav className={styles.spaceNav}>
                <a href="/" className={styles.logo}>
                    <img src={logo} alt="mmtuts logo"/>
                </a>
                <NavSearch />
                <ul className={styles.navItemList}>
                    <NavbarItem navName = {"MarketPlace"} navPath = {"/assets"}/>
                    <span></span>
                    <NavbarItem navName = {"Create NFTs"} navPath = {"/create"}/>
                    <span></span>
                    <NavbarItem navName = {"Resource Center"} navPath = {"/register"}/>
                    <NavbarItem navName = {"User"} navPath = {"/user"}/>
                </ul>
            </nav>
            {
                props.err === 'none' ?
                    <Switch>
                        <Route exact path="/">
                            <Home />
                            <Footer />
                        </Route>
                        <Route exact path="/assets">
                            <Marketplace category={'market'}/>
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/assets/:nftId" exact component={Nft}>
                        </Route>
                        <Route path="/users" exact>
                            <User />
                        </Route>
                    </Switch>
                :   
                    <Route path="/">
                        <Alert err={props.err} />
                        <Home />
                    </Route>
            }
            
        </Router>
    )
}

export default Navbar;
