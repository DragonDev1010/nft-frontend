import React, {useState} from 'react'
import styles from '../Marketplace.module.css'
import FilStatusOptions from './FilPriceOptions'
import * as FaIcons from "react-icons/fa";
function FilterPrice() {
    const [show, setShow] = useState(true)
    function showOptions(e:any) {
        e.preventDefault()
        if(show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }
    return(
        <div className={styles.filterPriceWrap}>
            <div className={styles.filName} onClick={showOptions}>
                <div>
                    <FaIcons.FaDollarSign size={15}/>
                    Price
                </div>
                <FaIcons.FaArrowUp size={15}/>
            </div>
            {
                show ?
                <FilStatusOptions />
                :
                ""
            }
            
        </div>
    )
}

export default FilterPrice