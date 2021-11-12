import React, {useState} from 'react'
import styles from '../Marketplace.module.css'

import FilterCollectionList from './FilterCollectionList'

import * as FaIcons from 'react-icons/fa'
function FilterCollection() {
    const [show, setShow] = useState(true)
    function showOptions(e:any) {
        e.preventDefault()
        if(show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }
    return (
        <div className={styles.filterCollectWrap}>
            <div className={styles.filName} onClick={showOptions}>
                <div>
                    <FaIcons.FaCircle size={15}/>
                    Collection
                </div>
                <FaIcons.FaArrowUp size={15}/>
            </div>
            {
                show ?
                <FilterCollectionList />
                :
                ""
            }
        </div>
    )
}

export default FilterCollection