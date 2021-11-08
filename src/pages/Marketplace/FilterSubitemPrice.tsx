import React from 'react'
import styles from './Marketplace.module.css'
function FilterSubitemPrice() {
    return (
        <div className={styles.filterSubitemPrice}>
            <form>
                <select name = "dropdown">
                    {/* <option value = "usd" selected>SOGE</option> */}
                    <option value = "eth">ETH</option>
                </select>
                <div className={styles.filterSubitemPriceInput}>
                    <input type="text"/>
                    <span>to</span>
                    <input type="text"/>
                </div>
                <button>Apply</button>
            </form>
        </div>
    )
}

export default FilterSubitemPrice