import React from 'react'
import FilterItemData from './FilterItemData'
import styles from './Marketplace.module.css'
function Filter() {
    return (
        <div className={styles.filter}>
            <ul>
                {FilterItemData.map((item, idx) => {
                    let icon_style = "fa " + item.icon
                    console.log(icon_style)
                    console.log(typeof(icon_style))
                    return(
                        <li className={styles.listItem}><i className={""}></i>{item.name}</li>
                    )
                })}        
            </ul>
        </div>
    )
}

export default Filter