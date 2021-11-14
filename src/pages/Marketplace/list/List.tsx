import React, {useEffect, useState} from 'react'
import { useStore, useSelector } from 'react-redux'
import Item from './Item'
import FilterBar from './FilterBar'
import styles from '../Marketplace.module.css'
import * as FaIcons from "react-icons/fa";
import backgroundVideo from '../../../assets/bgVideo.mp4'
import bgPoster from '../../../assets/bgVideo.jpg'
function List() {
    const store = useSelector((state: any) => state.search)
    const [nftLen, setNftLen] = useState(0)
    const [nfts, setNfts] = useState([{}])
    const nftTemp = {
        nft_id:0,
        collects: {
            id:0,
            name: "None"
        },
        owner: {
            id:0,
            name: "None"
        },
        creator: {
            id:0,
            name: "None"
        },
        price: 0,
        name: "None",
        description: "None"
    }
    function getAPIQuery() {
        let queryStatus = store.status
        let queryPrice = store.price
        let queryCollects = store.collects
        let queryCategory = store.category
        let queryStr = ''
        if(queryStatus.length > 0) {
            queryStatus.map((item: any) => {
                queryStr += 'search[status]=' + item + '&'
            })
        }
        if(queryPrice.length > 0) {
            queryStr += 'search[price][min]=' + queryPrice[0] + '&'
            queryStr += 'search[price][max]=' + queryPrice[1] + '&'
        }
        if(queryCollects.length > 0) {
            queryCollects.map((item:any) => {
                queryStr += 'search[collects]=' + item + '&'
            })
        }
        if(queryCategory.length > 0)  {
            queryCategory.map((item:any) => {
                queryStr += 'search[category]=' + item + '&'
            })
        }
        return 'http://localhost:8000/nfts?' + queryStr
    }
    function callAPI() {
        let fetchURL = getAPIQuery()
        fetch(fetchURL)
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
    }, [store])
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
            <FilterBar />
            <div className={styles.listWrap}>
                {
                    nftLen > 0 ?
                    nfts.map((nft, idx) => {
                        return <Item idx={idx} nft={nft}/>
                    })
                    :
                    // <Item idx="0" nft={nftTemp}/>
                    ""
                }
            </div>
        </div>
    )
}

export default List