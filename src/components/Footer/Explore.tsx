import {useState, useEffect} from 'react'
import styles from './Footer.module.css'

function Explorer() {
    const [collects, setCollects] = useState([])
    function search() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'collects?'
        fetch(fetchURL)
            .then(res => res.json())
            .then( res => {
                setCollects(res)
            })
    }
    useEffect(() => {
        search()
    }, [])
    return (
        <div className={styles.expWrap}>
            <p className={styles.itemTitle}>Explorer</p>
            <ul>
                {
                    collects.length > 0 ?
                        collects.map((item:any) => (
                            <li><a>{item.name}</a></li>
                        ))
                    :
                    ""
                }
            </ul>
        </div>
    )
}

export default Explorer