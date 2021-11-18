import React, {useEffect, useState} from 'react'
import styles from './Create.module.css'

function Collects(props:any) {
    const [collects, setCollects] = useState([])
    let temp:any = []
    async function getCollects() {
        await fetch('http://localhost:8000/collects?')
            .then(res => res.json())
            .then(res => {
                res.map((item:any) => {
                    temp.push(item.name)
                })
            })
        setCollects(temp)
    }
    useEffect(() => {
        getCollects()
    },[])
    function handleChange(e:any) {
        props.setMethod(e.target.value)
    }
    return (
        <div className={styles.category}>
            <p className={styles.headTxt}>Collection</p>
            <select className={styles.colList} onChange={handleChange}>
                <option className={styles.colItem}>Select Collection</option>
                {
                    collects.map((item:any) => (
                        <option className={styles.colItem} value={item}>{item}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Collects