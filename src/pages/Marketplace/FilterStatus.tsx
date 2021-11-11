import React from 'react'
import styles from './Marketplace.module.css'
import FilStatusOptions from './FilStatusOptions'
function FilterStatus() {
    return(
        <div className={styles.filStatusWrap}>
            <div className={styles.filName}></div>
            <FilStatusOptions />
        </div>
    )
}

export default FilterStatus