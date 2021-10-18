import React from 'react'
import styles from './Marketplace.module.css'
function FilterSubitemStatus() {
    return (
        <div className={styles.filterSubitemStatus}>
            <form className={styles.filterSubitemStatusForm}>
                <button>Buy Now</button>
                <button>On Auction</button>
                <button>New</button>
                <button>Has Offers</button>
            </form>
        </div>
    )
}

export default FilterSubitemStatus