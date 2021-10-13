import React from 'react'
import Item from './Item'
import styles from './Marketplace.module.css'
function List() {
    function handleFilterForm(event: any) {

    }
    function handleChange(event: any) {

    }
    return (
        <div className={styles.list}>
            <p>2323323 results</p>
            <form onSubmit={handleFilterForm}>
                <input type='text' name='item' onChange={handleChange}/>
                <input type='text' name='sort' onChange={handleChange}/>
            </form>
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