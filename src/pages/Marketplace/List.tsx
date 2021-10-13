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
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default List