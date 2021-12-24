import {useState, useEffect} from 'react'
import itemImg8 from '../../../../assets/img/items/8.jpg'
import avatarImg8 from '../../../../assets/img/avatars/8.jpg'

import * as FaIcons from 'react-icons/fa'
import Card from './Card'
function Content() {
    const [nfts, setNfts] = useState([])
    function getUserAvatar(userId:any, nft: any) {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'users/' + userId
        fetch(fetchURL)
            .then(res => res.json())
            .then( res => {
                if(res.userImg !== undefined)
                    return res.userImg.data
            })
    }
    function fetchNfts() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'nfts?'
        fetch(fetchURL)
            .then(res => res.json())
            .then( res => {
                setNfts(res)
            })
    }
    useEffect(() => {
        fetchNfts()
    }, [])
    return(
        <div className="col-12 col-xl-9">
            <div className="row row--grid">
                {
                    nfts.length > 0 ?
                    nfts.map((item:any, idx:any) => (
                        <Card details={item}/>
                    ))
                    :
                    ""
                }
            </div>

            {/* paginator */}
            <div className="row row--grid">
                <div className="col-12">
                    <div className="paginator">
                        <ul className="paginator__list">
                            <li>
                                <a href="#"><FaIcons.FaArrowLeft /></a>
                            </li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li>
                                <a href="#"><FaIcons.FaArrowRight /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* end paginator */}

        </div>
    )
}

export default Content