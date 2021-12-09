import React, {useState, useEffect} from 'react'
import styles from '../Marketplace.module.css'
import * as FaIcons from 'react-icons/fa'

function Favorite(props: any) {
    const [favAmount, setFavAmount] = useState(0)
    const [isFav, setIsFav] = useState(false)
    function checkFav() {
        let url = process.env.REACT_APP_API_BASE_URL + 'nfts/' + props.idx
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if(res[0].favUserIds.includes(parseInt(localStorage.getItem('userId') || ''))) {
                    setIsFav(true)
                } else {
                    setIsFav(false)
                }
            })
    }
    checkFav()
    function handleFav() {
        let favUserIds, favNftIds
        let nftUrl: any, userUrl: any
        let userId:any, nftId: any
        userId = parseInt(localStorage.getItem('userId') || '')
        nftId = parseInt(props.idx)
        nftUrl = process.env.REACT_APP_API_BASE_URL + 'nfts/' + props.idx
        userUrl = process.env.REACT_APP_API_BASE_URL + 'users/' + localStorage.getItem('userId')
        fetch(nftUrl)
            .then(res => res.json())
            .then(res => {
                favUserIds = res[0].favUserIds || []
                if(isFav) {
                    favUserIds.splice( favUserIds.indexOf(userId), 1 )
                    fetch(
                        nftUrl, 
                        {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ favUserIds: favUserIds })
                        })
                        .then(() => {setIsFav(!isFav)})
                } else {
                    favUserIds.push(userId)
                    fetch(
                        nftUrl, 
                        {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ favUserIds: favUserIds })
                        })
                        .then(() => {setIsFav(!isFav)})
                }
                // setIsFav(!isFav)
            })
        fetch(userUrl)
            .then(res => res.json())
            .then(res => {
                favNftIds = res[0].favNftIds || []
                if(isFav) {
                    favNftIds.splice(favNftIds.indexOf(nftId), 1)
                    fetch(
                        userUrl,
                        {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ favNftIds: favNftIds })
                        })
                        .then(() => {setIsFav(!isFav)})
                } else {
                    favNftIds.push(nftId)
                    fetch(
                        userUrl,
                        {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ favNftIds: favNftIds })
                        })
                        .then(() => {setIsFav(!isFav)})
                }
            })
    }
    function getFavAmount() {
        let url = process.env.REACT_APP_API_BASE_URL + 'nftFavCnt/' + props.idx
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setFavAmount(res)
            })
    }
    getFavAmount()
    useEffect(() => {
        
    }, [])
    return (
        <div className={styles.itemFavorite} onClick={handleFav}>
            {
                isFav ?
                <FaIcons.FaHeart size={15}/>
                :
                <FaIcons.FaRegHeart size={15}/>
            }
            
            {favAmount}
        </div>
    )
}

export default Favorite