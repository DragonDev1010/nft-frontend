import React from 'react'
import styles from './Navbar.module.css'

function NavFilter() {
    function handleChange(event: any) {

    }
    function handleSubmit(event: any) {

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='navFilter' placeholder='Search' className={styles.navFilterInput} />
        </form>
    )
}

export default NavFilter