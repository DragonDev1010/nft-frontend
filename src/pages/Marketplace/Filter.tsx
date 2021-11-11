import React, {useState, useEffect} from 'react'
import styles from './Marketplace.module.css'
import FilterStatus from './FilterStatus'
import * as FaIcons from "react-icons/fa";
function Filter() {
    return (
        <div className={styles.filterWrap}>
            <div className={styles.filterHeader}>
                <FaIcons.FaFilter size={15}/>
                <span>Filters</span>        
                <FaIcons.FaTimes size={15}/>
            </div>
            <div className={styles.filterStatus}>
                <FilterStatus />
            </div>
        </div>
    )
}
export default Filter