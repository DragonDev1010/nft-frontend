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
import logo from '../../assets/starseas-final-001.png'
import avatar1 from '../../assets/img/avatars/avatar-1.jpg'
import * as FaIcons from 'react-icons/fa'
import {Dropdown} from 'react-bootstrap'
import LiveAuction from '../../pages/LiveAuction/index'
import Activity from '../../pages/Activity/Activity'
import Faq from '../../pages/ResourceCenter/Faq/Faq'
import SgeToken from '../../pages/ResourceCenter/SgeToken/SgeToken'
import Contract from '../../pages/ResourceCenter/Contact/Contact'
import PrivacyPolicy from '../../pages/ResourceCenter/PrivacyPolicy/PrivacyPolicy'
import About from '../../pages/ResourceCenter/About/About'
import Profile from '../../pages/User/Profile/Profile'
import AddItem from '../../pages/User/AddItem/AddItem'
function Navbar(props: any) {
    return (
        <Router>
            <header className="header">
                <div className="header__content">
                    <div className="header__logo">
                        <a href="/">
                            <img src={logo} alt=""/>
                        </a>
                    </div>

                    <form action="#" className="header__search">
                        <input type="text" placeholder="Search Items, Creators, and More... "/>
                        <button type="button"><FaIcons.FaSearch/></button>
                        <button type="button" className="close"><FaIcons.FaTimes/></button>
                    </form>

                    <div className="header__menu">
                        <ul className="header__nav">
                            <li className="header__nav-item">
                                <a href="/" className="header__nav-link" >Home</a>
                            </li>
                            <li className="header__nav-item">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className="header__nav-link">
                                        Marketplace
                                        {/* <FaIcons.FaAngleDown /> */}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="slideIn">
                                        <Dropdown.Item href="/assets/">All Items</Dropdown.Item>
                                        <Dropdown.Item href="/liveauction">Live Auctions</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>

                            <li className="header__nav-item">
                                <a href="/activity" className="header__nav-link">Activity</a>
                            </li>
                            <li className="header__nav-item">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className="header__nav-link">
                                        Resource Center 
                                        {/* <FaIcons.FaAngleDown /> */}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu slideIn">
                                        <Dropdown.Item href="/about">About</Dropdown.Item>
                                        <Dropdown.Item href="/faq">F&Q</Dropdown.Item>
                                        <Dropdown.Item href="/sge-token">SGE Token</Dropdown.Item>
                                        <Dropdown.Item href="/contact">Contact</Dropdown.Item>
                                        <Dropdown.Item href="/privacy-policy">Privacy Policy</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>

                        </ul>
                    </div>

                    <div className="header__actions">
                        <div className="header__action header__action--search">
                            <button className="header__action-btn" type="button"><FaIcons.FaSearch/></button>
                        </div>

                        <div className="header__action header__action--profile">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className="header__profile-btn header__profile-btn--verified">
                                    <img src={avatar1} alt=""/>
                                    <div>
                                        <p>@wilson</p>
                                        <span>920.75 ETH</span>
                                    </div>
                                    <FaIcons.FaAngleDown />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="header__profile-menu">
                                    <Dropdown.Item href="/profile"><FaIcons.FaUser /> <span>Profile</span></Dropdown.Item>
                                    <Dropdown.Item href="/profile"><FaIcons.FaListUl/><span>Activity</span></Dropdown.Item>
                                    <Dropdown.Item href="/addItem"><FaIcons.FaLayerGroup/> <span>Add Item</span></Dropdown.Item>
                                    <Dropdown.Item href="/profile"><FaIcons.FaCog /> <span>Settings</span></Dropdown.Item>
                                    <Dropdown.Item href="/"><FaIcons.FaSignOutAlt/> <span>Sign out</span></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <button className="header__btn" type="button">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>            
            {/* <nav className={styles.spaceNav}>
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
            </nav> */}
            {
                props.err === 'none' ?
                    <Switch>
                        <Route exact path="/">
                            <Home />
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
                        <Route path='/liveauction' exact>
                            <LiveAuction />
                        </Route>
                        <Route path='/Activity' exact>
                            <Activity />
                        </Route>
                        <Route path='/about' exact>
                            <About />
                        </Route>
                        <Route path='/faq' exact>
                            <Faq />
                        </Route>
                        <Route path='/sge-token' exact>
                            <SgeToken />
                        </Route>
                        <Route path='/contact' exact>
                            <Contract />
                        </Route>
                        <Route path='/privacy-policy' exact>
                            <PrivacyPolicy />
                        </Route>      
                        <Route path='/profile' exact>
                            <Profile/>
                        </Route>
                        <Route path='/addItem' exact>
                            <AddItem/>
                        </Route>                
                    </Switch>
                :   
                    <Route path="/">
                        <Alert err={props.err} />
                        <Home />
                    </Route>
            }
            <Footer />
        </Router>
        
    )
}

export default Navbar;
