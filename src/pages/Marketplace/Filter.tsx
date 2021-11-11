import React, {useState, useEffect} from 'react'
import styles from './Marketplace.module.css'
import FilterStatus from './status/FilterStatus'
import FilterPrice from './price/FilterPrice';
import * as FaIcons from "react-icons/fa";
function Filter() {
    return (
        <div className={styles.filterWrap}>
            <div className={styles.filterHeader}>
                <div>
                    <FaIcons.FaFilter size={15}/>
                    <span>Filters</span>        
                </div>
                <FaIcons.FaTimes size={15}/>
            </div>
            <div className={styles.filterStatus}>
                <FilterStatus />
            </div>
            <div className={styles.filterPrice}>
                <FilterPrice />
            </div>
        </div>
    )
}
export default Filter