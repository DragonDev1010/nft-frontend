import React, {useEffect, useState} from 'react'
import FilterCollectionSearch from './FilterCollectionSearch'
import FilterCollectionItem from './FilterCollectionItem'
import styles from '../Marketplace.module.css'
function FilterCollectionList() {
    const [searchName, setSearchName] = useState('')
    const [collects, setCollects] = useState([])
    function search() {
        let fetchURL = 'http://localhost:8000/collects?'
        if(searchName !== '') {
            fetchURL += 'collectsName='+searchName
        }
        fetch(fetchURL)
            .then(res => res.json())
            .then( res => {
                setCollects(res)
            })
    }
    useEffect(() => {
        search()
    }, [searchName])
    return (
        <div className={styles.filterCollectsListWrap}>
            <FilterCollectionSearch searchName={searchName} setName={setSearchName}/>
            <div className={styles.filterColItemWrap}>
                {
                    collects.length > 0 ?
                        collects.map((item:any, idx:any) => (
                            <FilterCollectionItem data={item}/>
                        ))
                    :
                    ""
                }
            </div>
        </div>
    )
}

export default FilterCollectionList