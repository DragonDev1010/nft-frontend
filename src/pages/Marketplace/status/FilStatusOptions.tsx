import React, {useState} from 'react'
import styles from '../Marketplace.module.css'
import { useStore } from 'react-redux'

function FilStatusOptions() {
    const store = useStore()
    let storeState = store.getState().search.status
    const [buy, setBuy] = useState(false)
    const [auction, setAuction] = useState(false)
    const [newstatus, setNewstatus] = useState(false)
    const [offer, setOffer] = useState(false)
    function handleClick(e: any) {
        // e.preventDefault()
        switch(e.target.name) {
            case "buy": 
                setBuy(!buy)
                break
            case "auction":
                setAuction(!auction)
                break
            case "new":
                setNewstatus(!newstatus)
                break
            case "offer":
                setOffer(!offer)
                break
            default : {
            }
        }
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
        <div className = {styles.filStatusOptWrap}>
            <button onClick={handleClick} name="buy" id="0" className={buy?styles.activeBtn:''}>Buy Now</button>
            <button onClick={handleClick} name="auction" id="1" className={auction?styles.activeBtn:''}>On Auction</button>
            <button onClick={handleClick} name="new" id="2" className={newstatus?styles.activeBtn:''}>new</button>
            <button onClick={handleClick} name="offer" id="3" className={offer?styles.activeBtn:''}>offer</button>
        </div>
    )
}

export default FilStatusOptions