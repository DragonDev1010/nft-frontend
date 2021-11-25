import React from 'react'
import styles from './User.module.css'
import Header from './Header'
function User() {
    return(
        <div className={styles.userWrap}>
            <Header />
        </div>
    )
}

export default User