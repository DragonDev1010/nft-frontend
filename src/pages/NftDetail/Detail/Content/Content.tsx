import single from '../../../../assets/img/items/single.jpg'
import FavCount from './FavCount'
import SocialLink from './SocialLink'
function Content() {
    return(
        <div className="col-12 col-xl-8">
            <div className="asset__item">
                <img src={single} alt=""/>
                <SocialLink/>
                <FavCount/>
            </div>
        </div>
    )
}

export default Content