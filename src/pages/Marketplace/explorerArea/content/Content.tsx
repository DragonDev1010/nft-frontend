function Content() {
    return(
        <div className="col-12 col-xl-9">
            <div className="row row--grid">
                <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
                    <div className="card">
                        <a href="item.html" className="card__cover">
                            <img src="assets/img/items/8.jpg" alt=""/>
                        </a>
                        <h3 className="card__title"><a href="item.html">Awesome Color
                                Drop</a></h3>
                        <div className="card__author card__author--verified">
                            <img src="assets/img/avatars/8.jpg" alt=""/>
                            <a href="author.html">@morgan28</a>
                        </div>
                        <div className="card__info">
                            <div className="card__price">
                                <span>Sale price</span>
                                <span>9.21 ETH</span>
                            </div>

                            <button className="card__likes" type="button">
                                <i className="far fa-heart"></i>
                                <span>6k</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
                    {/* carousel card */}
                    <div className="card">
                        <div className="card__cover card__cover--carousel owl-carousel">
                            <img src="assets/img/items/1.jpg" alt=""/>
                            <img src="assets/img/items/2.jpg" alt=""/>
                            <img src="assets/img/items/3.jpg" alt=""/>
                        </div>

                        <h3 className="card__title"><a href="item.html">Beautiful Leaf In The Wall</a></h3>
                        <div className="card__author card__author--verified">
                            <img src="assets/img/avatars/7.jpg" alt=""/>
                            <a href="author.html">@nessler520</a>
                        </div>
                        <div className="card__info">
                            <div className="card__price">
                                <span>Sale price</span>
                                <span>1.22 ETH</span>
                            </div>

                            <button className="card__likes" type="button">
                                <i className="far fa-heart"></i>
                                <span>8k</span>
                            </button>
                        </div>
                    </div>
                    {/* end carousel card */}
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
                    <div className="card">
                        <a href="item.html" className="card__cover">
                            <img src="assets/img/items/6.jpg" alt=""/>
                        </a>
                        <h3 className="card__title"><a href="item.html">Blue Planet Revolution</a></h3>
                        <div className="card__author card__author--verified">
                            <img src="assets/img/avatars/6.jpg" alt=""/>
                            <a href="author.html">@kimberly28</a>
                        </div>
                        <div className="card__info">
                            <div className="card__price">
                                <span>Sale price</span>
                                <span>9.10 ETH</span>
                            </div>

                            <button className="card__likes" type="button">
                                <i className="far fa-heart"></i>
                                <span>80k</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
                    <div className="card">
                        <a href="item.html" className="card__cover">
                            <img src="assets/img/items/3.jpg" alt=""/>
                            <span className="card__time card__time--clock">
                                <i className="far fa-fire"></i>
                                <span className="card__clock card__clock--1"></span>
                            </span>
                        </a>
                        <h3 className="card__title"><a href="item.html">Let's Go The Navy Blue Galaxies</a></h3>
                        <div className="card__author card__author--verified">
                            <img src="assets/img/avatars/3.jpg" alt=""/>
                            <a href="author.html">@humphrey124</a>
                        </div>
                        <div className="card__info">
                            <div className="card__price">
                                <span>Sale price</span>
                                <span>7.87 ETH</span>
                            </div>

                            <button className="card__likes" type="button">
                                <i className="far fa-heart"></i>
                                <span>50k</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
                    <div className="card">
                        <a href="item.html" className="card__cover">
                            <img src="assets/img/items/7.jpg" alt=""/>
                        </a>
                        <h3 className="card__title"><a href="item.html">Beautiful Leaf In The Wall</a></h3>
                        <div className="card__author card__author--verified">
                            <img src="assets/img/avatars/7.jpg" alt=""/>
                            <a href="author.html">@nessler520</a>
                        </div>
                        <div className="card__info">
                            <div className="card__price">
                                <span>Sale price</span>
                                <span>1.22 ETH</span>
                            </div>

                            <button className="card__likes" type="button">
                                <i className="far fa-heart"></i>
                                <span>8k</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
                    <div className="card">
                        <a href="item.html" className="card__cover">
                            <img src="assets/img/items/4.jpg" alt=""/>
                        </a>
                        <h3 className="card__title"><a href="item.html">Let's Go The Navy Blue Galaxies</a></h3>
                        <div className="card__author card__author--verified">
                            <img src="assets/img/avatars/4.jpg" alt=""/>
                            <a href="author.html">@humphrey124</a>
                        </div>
                        <div className="card__info">
                            <div className="card__price">
                                <span>Sale price</span>
                                <span>7.87 ETH</span>
                            </div>

                            <button className="card__likes" type="button">
                                <i className="far fa-heart"></i>
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
                                <a href="#"><i className="far fa-arrow-left"></i></a>
                            </li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li>
                                <a href="#"><i className="far fa-arrow-right"></i></a>
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