import React from 'react'
import Item from './Item'
import styles from './Marketplace.module.css'
import * as FaIcons from "react-icons/fa";
import backgroundVideo from '../../assets/bgVideo.mp4'
import bgPoster from '../../assets/bgVideo.jpg'
function List() {
    function handleFilterForm(event: any) {

    }
    function handleChange(event: any) {

    }
    return (
        <div className={styles.list}>
            <video className={styles.backgroundVideo} poster={bgPoster} autoPlay loop muted   >
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className={styles.listHeader}>
                <p>2323323 results</p>
                <div className={styles.listHeaderRight}>
                    <form onSubmit={handleFilterForm} className={styles.listHeaderForm}>
                        <input type='text' name='item' onChange={handleChange} placeholder="All items" className={styles.listHeadInput}/>
                        <input type='text' name='sort' onChange={handleChange} placeholder="Sort by" className={styles.listHeadInput}/>
                    </form>
                    <FaIcons.FaThLarge size={26}/>
                    <FaIcons.FaTh size={30}/>
                </div>
                
            </div>
                
            <div className={styles.listWrap}>
                <div className={styles.listRow}>
                    <Item />
                    <Item />
                    <Item />
                </div>
                <div className={styles.listRow}>
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </div>
    )
}

export default List