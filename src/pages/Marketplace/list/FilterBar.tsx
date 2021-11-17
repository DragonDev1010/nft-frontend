import React, {useState} from 'react'
import { FaHandPointLeft } from 'react-icons/fa'
import {useSelector, useStore} from 'react-redux'
import FilterBarItem from './FilterBarItem'
import styles from '../Marketplace.module.css'
function FilterBar() {
    const searchState = useSelector((state: any) => state.search)
    const store = useStore()
    const statusName = ["Buy Now", "On Auction", "New", "Offer"]
    const priceName = ["Min", "Max"]
    function removeAll() {
        store.dispatch({
            type:"",
            search:{}
        })
    }
    console.log('searchState: ', searchState)
    return (
        <div className={styles.filterBar}>
            {searchState.status.map((item:any) => (
                <FilterBarItem name={"status"} val={item} btnName={statusName[parseInt(item)]}/>
            ))}
            {searchState.price.map((item:any, idx:any) => (
                <FilterBarItem name={"price"} val={item} btnName={`${priceName[parseInt(idx)]} : ${item}`}/>
            ))}
            {searchState.collects.map((item:any) => (
                <FilterBarItem name={"collects"} val={item} btnName={item}/>
            ))}
            {
                searchState.status.length > 0 || searchState.price.length > 0 || searchState.collects.length > 0 ?
                <span onClick={removeAll}>Clear All</span>
                :
                ""
            }
        </div>
    )
}

export default FilterBar;