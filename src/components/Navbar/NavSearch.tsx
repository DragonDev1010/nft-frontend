import React from 'react'
import styles from './Navbar.module.css'

function NavSearch() {
    function handleChange(event: any) {

    }
    function handleSubmit(event: any) {

    }
    return (
        <form onSubmit={handleSubmit} className={styles.navFilterForm}>
            <input type='text' name='navFilter' placeholder='Search items, collections, and more' className={styles.navFilterInput} />
        </form>
    )
}

export default NavSearch