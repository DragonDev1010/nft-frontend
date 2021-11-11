import React from 'react'
import styles from './Marketplace.module.css'
import { useStore } from 'react-redux'

function FilStatusOptions() {
    const store = useStore()
    let storeState = store.getState().search.status
    function handleClick(e: any) {
        // e.preventDefault()
        if(storeState.length == 0) {
            storeState.push(e.target.id)
        } else {
            if(storeState.includes(e.target.id)) {
                storeState.splice(storeState.indexOf(e.target.id), 1)
            } else {
                storeState.push(e.target.id)
            }
        }
        store.dispatch({
            type: "changeState",
            search: {
                status: storeState,
                price: store.getState().search.price,
                collects: store.getState().search.collects
            }
        })
    }
    return (
        <div>
            <button onClick={handleClick} name="buy" id="0">Buy Now</button>
            <button onClick={handleClick} name="auction" id="1">On Auction</button>
            <button onClick={handleClick} name="new" id="2">new</button>
            <button onClick={handleClick} name="offer" id="3">offer</button>
        </div>
    )
}

export default FilStatusOptions