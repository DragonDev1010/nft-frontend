import React from 'react'
import FilterItemData from './FilterItemData'
import styles from './Marketplace.module.css'
import * as FaIcons from "react-icons/fa";
import FilterItem from './FilterItem';
function Filter() {
    return (
        <div className={styles.filter}>
            <ul style={{paddingInlineStart: "0"}}>
                {FilterItemData.map((item, idx) => {
                    return(
                        <FilterItem data={item} />
                        // <li className={styles.filterListItem}>
                        //     <div>
                        //         <span style={{marginRight: "20px"}}>{item.icon}</span>
                        //         {item.name}
                        //     </div>
                        //     <div>
                        //         <FaIcons.FaCaretDown size={18}/>
                        //     </div>
                        // </li>
                    )
                })}        
            </ul>
        </div>
    )
}

export default Filter