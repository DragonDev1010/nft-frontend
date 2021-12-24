import itemImg8 from '../../../../assets/img/items/8.jpg'
import avatarImg8 from '../../../../assets/img/avatars/8.jpg'

import * as FaIcons from 'react-icons/fa'
import Card from './Card'
function Content() {
    
    return(
        <div className="col-12 col-xl-9">
            <div className="row row--grid">
                <Card />
                <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
                    <div className="card">
                        <a href="item.html" className="card__cover">
                            <img src={itemImg8} alt=""/>
                        </a>
                        <h3 className="card__title"><a href="item.html">Awesome Color
                                Drop</a></h3>
                        <div className="card__author card__author--verified">
                            <img src={avatarImg8} alt=""/>
                            <a href="author.html">@morgan28</a>
                        </div>
                        <div className="card__info">
                            <div className="card__price">
                                <span>Sale price</span>
                                <span>9.21 ETH</span>
                            </div>

                            <button className="card__likes" type="button">
                                <FaIcons.FaHeart />
                                <span>6k</span>
                            </button>
                        </div>
                    </div>
                </div>

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