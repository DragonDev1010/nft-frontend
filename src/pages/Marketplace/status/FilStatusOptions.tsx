import React, {useEffect, useState} from 'react'
import styles from '../Marketplace.module.css'
import { useStore, useSelector, connect } from 'react-redux'

function FilStatusOptions() {
    const store = useStore()
    let storeState = useSelector((state: any) => state.search.status)
    const [buy, setBuy] = useState(false)
    const [auction, setAuction] = useState(false)
    const [newstatus, setNewstatus] = useState(false)
    const [offer, setOffer] = useState(false)
    function handleClick(e: any) {
        e.preventDefault()
        let temp: any[] = [] 
        storeState.map((item:any) => {
            temp.push(item)
        })
        if(storeState.length == 0) {
            temp.push(e.target.id)
        } else {
            if(storeState.includes(e.target.id)) {
                temp.splice(temp.indexOf(e.target.id), 1)
            } else {
                temp.push(e.target.id)
            }
        }
        store.dispatch({
            type: "changeState",
            search: {
                status: temp,
                price: store.getState().search.price,
                collects: store.getState().search.collects,
                category: store.getState().search.category
            }
        })
    }
    return (
        <div style={{color: 'white'}} className = {styles.filStatusOptWrap}>
            <button onClick={handleClick} name="buy" id="0" className={storeState.includes('0')?styles.activeBtn:''}>Buy Now</button>
            <button onClick={handleClick} name="auction" id="1" className={storeState.includes('1')?styles.activeBtn:''}>On Auction</button>
            <button onClick={handleClick} name="new" id="2" className={storeState.includes('2')?styles.activeBtn:''}>New</button>
            <button onClick={handleClick} name="offer" id="3" className={storeState.includes('3')?styles.activeBtn:''}>Offer</button>
        </div>
    )
}
export default FilStatusOptions