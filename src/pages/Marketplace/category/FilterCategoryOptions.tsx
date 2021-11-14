import React, {useState} from 'react'
import { useStore, useSelector } from 'react-redux'
import styles from '../Marketplace.module.css'
import colLogo from '../../../assets/spaceItem.png'
import checkedIcon from '../../../assets/marketplace/filter/collects/checked.png'

function FilterCategoryOptions(props:any) {
    
    const store = useStore()
    let storeState = useSelector((state: any) => state.search.category)
    let temp: any[] = [] 
    storeState.map((item:any) => {
        temp.push(item)
    })
    function clickBtn() {
        if(temp.length == 0) {
            temp.push(props.data)
        } else {
            if(temp.includes(props.data)) {
                temp.splice(temp.indexOf(props.data), 1)
            } else {
                temp.push(props.data)
            }
        }
        store.dispatch({
            type: "changeState",
            search: {
                status: store.getState().search.status,
                price: store.getState().search.price,
                collects: store.getState().search.collects,
                category: temp
            }
        })
    }
    return (
        <button onClick={clickBtn} className={styles.filCollectItemBtn} name={props.data} id={props.id}>
            {
                storeState.includes(props.data) ?
                <img src={checkedIcon} />
                :
                ''
                // <img src={colLogo}/>
            }
            
            <p>{props.data}</p>
            <svg id="icons8-verified-badge" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                <path id="Path_1" data-name="Path 1" d="M10.5,2l1.739,1.932,2.511-.773.58,2.511,2.511.58-.773,2.511L19,10.5l-1.932,1.739.773,2.511-2.511.58-.58,2.511-2.511-.773L10.5,19,8.761,17.068l-2.511.773L5.67,15.33l-2.511-.58.773-2.511L2,10.5,3.932,8.761,3.159,6.25,5.67,5.67l.58-2.511,2.511.773Z" transform="translate(-2 -2)" fill="#42a5f5"/>
                <path id="Path_2" data-name="Path 2" d="M21.706,14.6l-5.629,6.187-2.318-2.548L12.6,19.513l3.477,3.821,6.788-7.461Z" transform="translate(-8.882 -10.401)" fill="#e3f2fd"/>
            </svg>
        </button>
    )
}

export default FilterCategoryOptions