import React, { useEffect, useRef, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'
import {useLocation} from 'react-router-dom'
import { useDetectOutsideClick } from './useDetectOutsideClick';
import * as FaIcons from "react-icons/fa";
function NavbarUser() {
    const dropdownRef = useRef<any>()
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

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
        <div className={styles.navbarUserContainer}>
            <button onClick={onClick} className={styles.navbarUserMenuTrigger}>
                {/* <span>User</span>
                <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" /> */}
                <FaIcons.FaUserCircle size={28}/>
            </button>
            {/* <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}> */}
            <nav ref={dropdownRef} className={isActive ? styles.navbarUserNavActive : styles.navbarUserNavInactive }>
                <ul>
                    <li><a href="/messages">Messages</a></li>
                    <li><a href="/trips">Trips</a></li>
                    <li><a href="/saved">Saved</a></li>
                </ul>
            </nav>
        </div>

    )
}

export default NavbarUser;