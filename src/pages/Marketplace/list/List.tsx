import React, {useEffect, useState} from 'react'
import { useStore, useSelector } from 'react-redux'
import Item from './Item'
import FilterBar from './FilterBar'
import styles from '../Marketplace.module.css'
import * as FaIcons from "react-icons/fa";
import backgroundVideo from '../../../assets/bgVideo.mp4'
import bgPoster from '../../../assets/bgVideo.jpg'
function List(props:any) {
    const userId = localStorage.getItem('userId')
    const store = useSelector((state: any) => state.search)
    const [nftLen, setNftLen] = useState(0)
    const [nfts, setNfts] = useState([{}])
    const [catNftIds, setCatNftIds] = useState<Number[]>([]) // this is for nft Ids for user profile page list
    function getAPIQuery() {
        let queryStatus = store.status
        let queryPrice = store.price
        let queryCollects = store.collects
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
        return process.env.REACT_APP_API_BASE_URL + 'nfts?' + queryStr
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
    function getUserInfo() {
        let fetchUrl = process.env.REACT_APP_API_BASE_URL + 'users/' + userId
        fetch(fetchUrl, {method:'GET'})
            .then(res => res.json())
            .then( (res) => {
                switch (props.category) {
                    case 'collected':
                        setCatNftIds(res[0].collectedNftIds)
                        break;
                    case 'created':
                        setCatNftIds(res[0].createdNftIds)
                        break;
                    case 'favorite':
                        setCatNftIds(res[0].favNftIds)
                        break;
                    default:
                        setCatNftIds([])
                        break;
                }
            })
    }
    function handleFilterForm(event: any) {

    }
    function handleChange(event: any) {

    }
    useEffect(() => {
        getUserInfo()
        callAPI()
    }, [store])
    // }, [store, catNftIds])
    return (
        <div className={styles.list}>
            <video className={styles.backgroundVideo} poster={bgPoster} autoPlay loop muted   >
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className={styles.listHeader}>
                <p>{nftLen} results</p>
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
                        props.category === 'market' ?
                            nfts.map((nft:any, idx) => {
                                return <Item idx={idx} nft={nft} />
                            })
                            :
                            nfts.map((nft:any, idx) => {
                                return catNftIds.includes(nft['nft_id']) ?  <Item idx={idx} nft={nft}/> : ''
                            })
                        :
                        ""
                }
            </div>
        </div>
    )
}

export default List