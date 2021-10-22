import React, { useEffect, useRef, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'
import {useLocation} from 'react-router-dom'
import { useDetectOutsideClick } from './useDetectOutsideClick';
import * as FaIcons from "react-icons/fa";
import Wallet from '../Wallet'
import { Button } from 'react-bootstrap'
import { useWeb3React } from "@web3-react/core"
import { injected } from "../Wallet/Connectors"
function NavbarUser() {
    const dropdownRef = useRef<any>()
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const [isConnected, setIsConnected] = useState(false)
    const onClick = () => setIsActive(!isActive);
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    console.log("localStorage: ", localStorage.getItem('userActive'))
    function handleLogout() {
        localStorage.clear()
    }
    async function connect() {
        try {
          await activate(injected)
          localStorage.setItem('userActive', 'Active')
          setIsConnected(true)
        } catch (ex) {
          console.log(ex)
        }
    }

    async function disconnect() {
        try {
          deactivate()
        } catch (ex) {
          console.log(ex)
        }
    }
    useEffect(() => {
        const pageClickEvent = (e: any) => {
            console.log(e)
            if(dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive)
            }
        };
        if(isActive) {
            window.addEventListener('click', pageClickEvent)
        }
        return () => {
            window.removeEventListener('click', pageClickEvent)
        }
    }, [isActive])

    return (
        <div>
            {
                isConnected ? 
                    <div className={styles.navbarUserContainer}>
                        <button onClick={onClick} className={styles.navbarUserMenuTrigger}>
                            <FaIcons.FaUserCircle size={28}/>
                        </button>
                        <nav ref={dropdownRef} className={isActive ? styles.navbarUserNavActive : styles.navbarUserNavInactive }>
                            <ul>
                                <li><a href="/">Messages</a></li>
                                <li><a href="/">Trips</a></li>
                                <li onClick={handleLogout}><a href="/">Log Out</a></li>
                            </ul>
                        </nav>
                        
                    </div>
                :
                <div className={styles.walletWrap}>
                    <Button onClick = {connect} className={styles.walletButton}>Connect</Button>
                </div>
            }
        </div>

    )
}

export default NavbarUser;