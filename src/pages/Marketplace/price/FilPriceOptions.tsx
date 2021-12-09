import React, {useState} from 'react'
import styles from '../Marketplace.module.css'
import { useStore } from 'react-redux'

function FilterPriceOptions() {
    const store = useStore()
    const [min, setMin] = useState<Number>(-1)
    const [max, setMax] = useState<Number>(-1)
    const [correctPrice, setCorrectPrice] = useState(true)
    function minChange(e:any) {
        setMin(parseFloat(e.target.value))
    }
    function maxChange(e:any) {
        setMax(parseFloat(e.target.value))        
    }
    function setPriceFilter() {
        if(min > max) {
            setCorrectPrice(false)
        } else {
            setCorrectPrice(true)
            store.dispatch({
                type: "changeState",
                search: {
                    status: store.getState().search.status,
                    price: [min, max],
                    collects: store.getState().search.collects,
                    category: store.getState().search.category
                }
            })
        }
    }
    return (
        <div className = {styles.filterPriceOptWrap} style={{color:'white'}}>
            <div className={styles.filterPriceInput}>
                <input type="text" onChange={minChange} placeholder="Min"/>
                <span>to</span>
                <input type="text" onChange={maxChange} placeholder="Max"/>
            </div>
            <div className={styles.priceIssue}>
                {correctPrice?"": "price issue"}
            </div>
            
            <button onClick={setPriceFilter} className={styles.priceBtn}>Apply</button>
        </div>
    )
}

export default FilterPriceOptions