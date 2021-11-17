import React, { useEffect, useRef, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import styles from '../Navbar.module.css'
import {useLocation} from 'react-router-dom'
import { useDetectOutsideClick } from './useDetectOutsideClick';
import * as FaIcons from "react-icons/fa";
import { useWeb3React } from "@web3-react/core"
import { injected } from "./Connectors"
function NavbarUser() {
    const [connected, setConnected] = useState(false)
    const dropdownRef = useRef<any>()
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    function handleLogout() {
        localStorage.clear()
    }
    
    async function connect() {
        try {
            await activate(injected)
            localStorage.setItem('walletConnected', 'true')
            setConnected(!connected)
        } catch (ex) {
          console.log(ex)
          localStorage.setItem('walletConnected', 'false')
        }
    }
    async function disconnect() {
        try {
          deactivate()
          localStorage.setItem('walletConnected', 'false')
          setConnected(!connected)
        } catch (ex) {
          console.log(ex)
          localStorage.setItem('walletConnected', 'true')
        }
    }
    useEffect(() => {
        const pageClickEvent = (e: any) => {
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
    }, [isActive, connected])
    return (
        <div className={styles.navbarUserWrap}>
            {
                (localStorage.getItem('walletConnected') === 'true')?
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
                    <button onClick = {connect} className={styles.walletButton}>Connect</button>
                </div>
            }
        </div>

    )
}

export default NavbarUser;