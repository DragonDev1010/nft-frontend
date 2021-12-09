import React, { useState } from 'react'
import { useSelector, useStore } from 'react-redux'
import styles from '../Marketplace.module.css'
import * as FaIcons from 'react-icons/fa'
function FilterBarItem(props:any) {
    const searchState = useSelector((state: any) => state.search)
    const store = useStore()
    
    
    function handle(e:any) {
        let temp: any[] = []
        switch (e.target.name) {
            case "status":
                searchState.status.splice(searchState.status.indexOf(e.target.id), 1)
                temp = []
                searchState.status.map((item: any) => {
                    temp.push(item)
                })
                store.dispatch({
                    type: "changeState",
                    search: {
                        // status: searchState.status,
                        status: temp,
                        price: store.getState().search.price,
                        collects: store.getState().search.collects,
                        category: store.getState().search.category
                    }
                })
                break;
        
            case "price":
                searchState.price.splice(searchState.price.indexOf(e.target.id), 1)
                temp = []
                searchState.price.map((item:any) => {
                    temp.push(item)
                })
                store.dispatch({
                    type: "changeState",
                    search: {
                        status: store.getState().search.status,
                        // price: searchState.price,
                        price:temp,
                        collects: store.getState().search.collects,
                        category: store.getState().search.category
                    }
                })
                break;
                
            case "collects":
                searchState.collects.splice(searchState.collects.indexOf(e.target.id), 1)
                temp = []
                searchState.collects.map((item: any) => {
                    temp.push(item)
                })
                store.dispatch({
                    type: "changeState",
                    search: {
                        status: store.getState().search.status,
                        price: store.getState().search.price,
                        // collects: searchState.collects,
                        collects: temp,
                        category: store.getState().search.category
                    }
                })
                break;
            case "category":
                searchState.category.splice(searchState.category.indexOf(e.target.id), 1)
                temp = []
                searchState.category.map((item: any) => {
                    temp.push(item)
                })
                store.dispatch({
                    type: "changeState",
                    search: {
                        status: store.getState().search.status,
                        price: store.getState().search.price,
                        collects: store.getState().search.collects,
                        category: temp
                    }
                })
                break;
            default:
                break;
        }
    }
    return(
        <button name={props.name} id={props.val} onClick={handle} className={styles.filterBarItem}>
            {props.btnName}
            <FaIcons.FaTimes size={15} />
        </button>
    )
}

export default FilterBarItem