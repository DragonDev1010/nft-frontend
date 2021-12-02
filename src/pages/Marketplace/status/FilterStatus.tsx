import React, {useState} from 'react'
import styles from '../Marketplace.module.css'
import FilStatusOptions from './FilStatusOptions'
import * as FaIcons from "react-icons/fa";
function FilterStatus() {
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
        <div className={styles.filStatusWrap}>
            <div className={styles.filName} onClick={showOptions}>
                <div>
                    <FaIcons.FaCircle size={15}/>
                    Status
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

export default FilterStatus