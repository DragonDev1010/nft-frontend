import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
const NavbarItem: React.FC<{navName: string, navPath: string}> = ({navName, navPath}) => {
    return (
        <li className={styles.spaceListItem}>
            <Link to={navPath} className={styles.spaceNavLink}>{navName}</Link>
        </li>
    )
}

export default NavbarItem