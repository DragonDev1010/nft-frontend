import itemImg8 from '../../../../assets/img/items/8.jpg'
import avatarImg8 from '../../../../assets/img/avatars/8.jpg'
import itemImg7 from '../../../../assets/img/items/7.jpg'
import avatarImg7 from '../../../../assets/img/avatars/7.jpg'
import itemImg6 from '../../../../assets/img/items/6.jpg'
import avatarImg6 from '../../../../assets/img/avatars/6.jpg'
import itemImg5 from '../../../../assets/img/items/5.jpg'
import avatarImg5 from '../../../../assets/img/avatars/5.jpg'
import itemImg4 from '../../../../assets/img/items/4.jpg'
import avatarImg4 from '../../../../assets/img/avatars/4.jpg'
import itemImg3 from '../../../../assets/img/items/3.jpg'
import avatarImg3 from '../../../../assets/img/avatars/3.jpg'
import itemImg2 from '../../../../assets/img/items/2.jpg'
import avatarImg2 from '../../../../assets/img/avatars/2.jpg'
import itemImg1 from '../../../../assets/img/items/1.jpg'
import avatarImg1 from '../../../../assets/img/avatars/1.jpg'
import * as FaIcons from 'react-icons/fa'
function Content() {
    return(
        <div className="col-12 col-xl-9">
            <div className="row row--grid">
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

                <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
                    {/* carousel card */}
                    <div className="card">
                        <div className="card__cover card__cover--carousel owl-carousel">
                            <img src={itemImg1} alt=""/>
                            <img src={itemImg2} alt=""/>
                            <img src={itemImg3} alt=""/>
                        </div>

                        <h3 className="card__title"><a href="item.html">Beautiful Leaf In The Wall</a></h3>
                        <div className="card__author card__author--verified">
                            <img src={avatarImg7} alt=""/>
                            <a href="author.html">@nessler520</a>
                        </div>
                        <div className="card__info">
                            <div className="card__price">
                                <span>Sale price</span>
                                <span>1.22 ETH</span>
                            </div>

                            <button className="card__likes" type="button">
                                <FaIcons.FaHeart />
                                <span>8k</span>
                            </button>
                        </div>
                    </div>
                    {/* end carousel card */}
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
                    <div className="card">
                        <a href="item.html" className="card__cover">
                            <img src={itemImg6} alt=""/>
                        </a>
                        <h3 className="card__title"><a href="item.html">Blue Planet Revolution</a></h3>
                        <div className="card__author card__author--verified">
                            <img src={avatarImg6} alt=""/>
                            <a href="author.html">@kimberly28</a>
                        </div>
                        <div className="card__info">
                            <div className="card__price">
                                <span>Sale price</span>
                                <span>9.10 ETH</span>
                            </div>

                            <button className="card__likes" type="button">
                                <FaIcons.FaHeart />
                                <span>80k</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
                    <div className="card">
                        <a href="item.html" className="card__cover">
                            <img src={itemImg3} alt=""/>
                            <span className="card__time card__time--clock">
                                <FaIcons.FaFire />
                                <span className="card__clock card__clock--1"></span>
                            </span>
                        </a>
                        <h3 className="card__title"><a href="item.html">Let's Go The Navy Blue Galaxies</a></h3>
                        <div className="card__author card__author--verified">
                            <img src={avatarImg3} alt=""/>
                            <a href="author.html">@humphrey124</a>
                        </div>
                        <div className="card__info">
                            <div className="card__price">
                                <span>Sale price</span>
                                <span>7.87 ETH</span>
                            </div>

                            <button className="card__likes" type="button">
                                <FaIcons.FaHeart />
                                <span>50k</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
                    <div className="card">
                        <a href="item.html" className="card__cover">
                            <img src={itemImg7} alt=""/>
                        </a>
                        <h3 className="card__title"><a href="item.html">Beautiful Leaf In The Wall</a></h3>
                        <div className="card__author card__author--verified">
                            <img src={avatarImg7} alt=""/>
                            <a href="author.html">@nessler520</a>
                        </div>
                        <div className="card__info">
                            <div className="card__price">
                                <span>Sale price</span>
                                <span>1.22 ETH</span>
                            </div>

                            <button className="card__likes" type="button">
                                <FaIcons.FaHeart />
                                <span>8k</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
                    <div className="card">
                        <a href="item.html" className="card__cover">
                            <img src={itemImg4} alt=""/>
                        </a>
                        <h3 className="card__title"><a href="item.html">Let's Go The Navy Blue Galaxies</a></h3>
                        <div className="card__author card__author--verified">
                            <img src={avatarImg4} alt=""/>
                            <a href="author.html">@humphrey124</a>
                        </div>
                        <div className="card__info">
                            <div className="card__price">
                                <span>Sale price</span>
                                <span>7.87 ETH</span>
                            </div>

                            <button className="card__likes" type="button">
                                <FaIcons.FaHeart />
                                <span>50k</span>
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