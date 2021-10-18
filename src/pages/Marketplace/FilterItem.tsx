import React, {useState} from 'react'
import styles from './Marketplace.module.css'
import FilterItemData from './FilterItemData'
import * as FaIcons from "react-icons/fa";
function FilterItem(props: any) {
    console.log(props.data)
    return (
        <li className={styles.filterListItem}>
            <div className={styles.filterListMainItem}>
                <div>
                    <span style={{marginRight: "20px"}}>{props.data.icon}</span>
                    {props.data.name}
                </div>
                <div>
                    <FaIcons.FaCaretDown size={18}/>
                </div>
            </div>
            <div className={styles.filterListSubItem}>
                {props.data.submenu}
            </div>

        </li>
    )
}

export default FilterItem