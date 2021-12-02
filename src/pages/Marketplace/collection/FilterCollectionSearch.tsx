import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import styles from '../Marketplace.module.css'
import * as FaIcons from 'react-icons/fa'
function FilterCollectionSearch(props:any) {
    const [collectName, setCollectName] = useState('')
    function search(e:any) {
        e.preventDefault()
        props.setName(e.target.value)
        setCollectName(e.target.value)
    }
    function clear() {
        setCollectName('')
        props.setName('')
    }
    return (
        <div className={styles.collectSearchWrap}>
            <FaIcons.FaSearch size={18} />
            <input type="text" onChange={search} value={collectName}/>
            {
                collectName === '' ?
                ''
                :
                <button onClick={clear}><FaIcons.FaTimes size={15}/></button>
            }
            
        </div>
    )
}

export default FilterCollectionSearch