import single from '../../../../assets/img/items/single.jpg'
import FavCount from './FavCount'
import SocialLink from './SocialLink'
import {useState, useEffect} from 'react'
function Content(props: any) {
    const [favCount, setFavCount] = useState(0)
    return(
        <div className="col-12 col-xl-8">
            <div className="asset__item">
                <img src={single} alt=""/>
                <SocialLink/>
                <FavCount favCnt = {favCount}/>
            </div>
        </div>
    )
}

export default Content