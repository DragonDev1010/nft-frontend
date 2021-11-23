import React, {useState, useEffect} from 'react'
import styles from '../Marketplace.module.css'
import * as FaIcons from 'react-icons/fa'

function Favorite(props: any) {
    const [favAmount, setFavAmount] = useState(0)
    function getFavAmount() {
        console.log('test: ', process.env.REACT_APP_API_BASE_URL)
        let url = process.env.REACT_APP_API_BASE_URL + 'nftFavCnt/' + props.idx
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setFavAmount(res)
            })
    }
    useEffect(() => {
        getFavAmount()
    }, [])
    return (
        <div className={styles.itemFavorite}>
            <FaIcons.FaRegHeart size={15}/>
            {favAmount}
        </div>
    )
}

export default Favorite