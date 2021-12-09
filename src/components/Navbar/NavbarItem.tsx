import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'
import {useLocation} from 'react-router-dom'
import NavbarUser from './user/NavbarUser'
const NavbarItem: React.FC<{navName: string, navPath: string}> = ({navName, navPath}) => {
    return (
        <li className={styles.navListItem}>
            {
                (navName === 'User') ? 
                    <NavbarUser />
                    :
                    <NavLink to={navPath} className={styles.navListItemLink} activeClassName={styles.navListItemLinkActive} exact>{navName}</NavLink>
            }
            
        </li>
    )
}

export default NavbarItem