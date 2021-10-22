import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom'
import Home from '../../pages/Marketplace'
import Create from '../../pages/Create'
import Register from '../../pages/Register'
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
    const [userCon, setUserCon] = useState(false)
    console.log('Web3React Test: ', active, account)
    if(active) {
        let walletAddress:string = account!;
        localStorage.setItem('userWalletAddress', walletAddress)
        
    } 
    useEffect(() => {
        if(localStorage.getItem("userActive") === "Active") {
            setUserCon(true)
        }
      }, []);
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
                    <NavbarItem navName = {"User"} navPath = {"/user"}/>
                    {/* {userCon ? <NavbarItem navName = {"User"} navPath = {"/user"}/> :  <li className={styles.navListItem}><Wallet /></li>} */}
                    
                    
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
