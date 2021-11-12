import React, {useState} from 'react'
import { useStore, useSelector } from 'react-redux'
import styles from '../Marketplace.module.css'
import colLogo from '../../../assets/spaceItem.png'
import checkedIcon from '../../../assets/marketplace/filter/collects/checked.png'
function FilterCollectionItem(props:any) {
    const [checked, setChecked] = useState(false)
    const store = useStore()
    let storeState = useSelector((state: any) => state.search.collects)
    function clickBtn() {
        setChecked(!checked)
        if(storeState.length == 0) {
            storeState.push(props.data.name)
        } else {
            if(storeState.includes(props.data.name)) {
                storeState.splice(storeState.indexOf(props.data.name), 1)
            } else {
                storeState.push(props.data.name)
            }
        }
        store.dispatch({
            type: "changeState",
            search: {
                status: store.getState().search.status,
                price: store.getState().search.price,
                collects: storeState,
                category: store.getState().search.category
            }
        })
    }
    return (
        <button onClick={clickBtn} className={styles.filCollectItemBtn} name={props.data.name} id={props.data.col_id}>
            {
                checked ?
                <img src={checkedIcon} />
                :
                <img src={colLogo}/>
            }
            
            <p>{props.data.name}</p>
            <svg id="icons8-verified-badge" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                <path id="Path_1" data-name="Path 1" d="M10.5,2l1.739,1.932,2.511-.773.58,2.511,2.511.58-.773,2.511L19,10.5l-1.932,1.739.773,2.511-2.511.58-.58,2.511-2.511-.773L10.5,19,8.761,17.068l-2.511.773L5.67,15.33l-2.511-.58.773-2.511L2,10.5,3.932,8.761,3.159,6.25,5.67,5.67l.58-2.511,2.511.773Z" transform="translate(-2 -2)" fill="#42a5f5"/>
                <path id="Path_2" data-name="Path 2" d="M21.706,14.6l-5.629,6.187-2.318-2.548L12.6,19.513l3.477,3.821,6.788-7.461Z" transform="translate(-8.882 -10.401)" fill="#e3f2fd"/>
            </svg>
        </button>
    )
}

export default FilterCollectionItem