import React, { useEffect, useRef, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import styles from '../Navbar.module.css'
import {useLocation} from 'react-router-dom'
import { useDetectOutsideClick } from './useDetectOutsideClick';
import * as FaIcons from "react-icons/fa";
import { useWeb3React } from "@web3-react/core"
import { injected } from "./Connectors"
import web3 from '../../../web3';
function NavbarUser() {
    const dropdownRef = useRef<any>()
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    const { active, account, library, connector, activate, deactivate } = useWeb3React()
    const [userWalletAddr, setUserWalletAddr] = useState('')
    async function connect() {
        try {
            await activate(injected)
            let temp = await web3.eth.getAccounts()
            setUserWalletAddr(temp[0])
        } catch (ex) {
          console.log(ex)
        }
    }
    async function disconnect() {
        try {
          deactivate()
          setUserWalletAddr('')
        } catch (ex) {
          console.log(ex)
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
    }, [isActive, userWalletAddr])
    return (
        <div className={styles.navbarUserWrap}>
            {
                (userWalletAddr !== '')?
                    <div className={styles.navbarUserContainer}>
                        <button onClick={onClick} className={styles.navbarUserMenuTrigger}>
                            <FaIcons.FaUserCircle size={28}/>
                        </button>
                        <nav ref={dropdownRef} className={isActive ? styles.navbarUserNavActive : styles.navbarUserNavInactive }>
                            <ul>
                                <li><a href="/">Profile</a></li>
                                <li><a href="/">Favorites</a></li>
                                <li><a href="/">Settings</a></li>
                                <li onClick={disconnect}><a href="/">Log Out</a></li>
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