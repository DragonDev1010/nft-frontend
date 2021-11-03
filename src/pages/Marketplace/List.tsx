import React, {useEffect, useState} from 'react'
import Item from './Item'
import styles from './Marketplace.module.css'
import * as FaIcons from "react-icons/fa";
import backgroundVideo from '../../assets/bgVideo.mp4'
import bgPoster from '../../assets/bgVideo.jpg'
function List() {
    const [nftLen, setNftLen] = useState(0)
    const [nfts, setNfts] = useState([{}])
    function callAPI() {
        fetch("http://localhost:8000/nfts")
            .then(res => res.json())
            .then(res => {
                setNfts(res)
                setNftLen(res.length)
            })
    }
    function handleFilterForm(event: any) {

    }
    function handleChange(event: any) {

    }
    useEffect(() => {
        callAPI()
    }, [])
    return (
        <div className={styles.list}>
            <video className={styles.backgroundVideo} poster={bgPoster} autoPlay loop muted   >
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className={styles.listHeader}>
                <p>2323323 results</p>
                <div className={styles.listHeaderRight}>
                    <form onSubmit={handleFilterForm} className={styles.listHeaderForm}>
                        <input type='text' name='item' onChange={handleChange} placeholder="All items" className={styles.listHeadInput}/>
                        <input type='text' name='sort' onChange={handleChange} placeholder="Sort by" className={styles.listHeadInput}/>
                    </form>
                    <FaIcons.FaThLarge size={26}/>
                    <FaIcons.FaTh size={30}/>
                </div>
                
            </div>
            <div className={styles.listWrap}>
                {
                    nftLen > 0 ?
                    nfts.map((nft, idx) => {
                        console.log("idx: ", idx)
                        console.log(nfts)
                        return <Item idx={idx} nft={nft}/>
                    })
                    :
                    ""
                }
            </div>
        </div>
    )
}

export default List