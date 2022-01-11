import pageTitle from '../../assets/img/bg/page-title.jpg'
import single from '../../assets/img/items/single.jpg'
import avatar from '../../assets/img/avatars/1.jpg'
import * as FaIcons from 'react-icons/fa'
import Breadcrumb from '../Breadcrumb'
function NftDetail(props: any) {
    const nftId = props.match.params.nftId
    return (
        // <!-- main content -->
            <main className="main">
                <Breadcrumb title={"Item Single"} subTitle={"Item Single"}/>
                {/* <!-- item single --> */}
                <div className="item-single pt-70">
                    <div className="container">
                        <div className="row">
                            {/* <!-- content --> */}
                            <div className="col-12 col-xl-8">
                                <div className="asset__item">
                                    <img src={single} alt=""/>
                
                                    {/* <!-- share --> */}
                                    <div className="share share--asset">
                                        <a href="#" className="share__link share__link--fb"> <FaIcons.FaFacebookF/>
                                            <span>share</span></a>
                                        <a href="#" className="share__link share__link--tw"> <FaIcons.FaTwitter/>
                                            <span>tweet</span></a>
                                        <a href="#" className="share__link share__link--link"> <FaIcons.FaLink/> <span>copy
                                                link</span></a>
                                    </div>
                                    {/* <!-- end share --> */}
                
                                    {/* <!-- likes --> */}
                                    <button className="asset__likes" type="button">
                                        <FaIcons.FaHeart/>
                                        <span>100k</span>
                                    </button>
                                    {/* <!-- end likes --> */}
                                </div>
                            </div>
                            {/* <!-- end content --> */}
        
                            {/* <!-- sidebar --> */}
                            <div className="col-12 col-xl-4">
                                <div className="asset__info">
                                    <div className="asset__desc">
                                        <h2>Colorful Fantacy Flower</h2>
                                    </div>
                
                                    <ul className="asset__authors">
                                        <li>
                                            <div className="card__price">
                                                <span>Sale price</span>
                                                <span className="text-danger fw-bolder">9.21 ETH</span>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Creator</span>
                                            <div className="asset__author asset__author--verified">
                                                <img src={avatar} alt=""/>
                                                <a href="author.html">@kimberly120</a>
                                            </div>
                                        </li>
                                    </ul>
                
                                    {/* <!-- tabs --> */}
                                    <ul className="nav nav-tabs asset__tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-bs-toggle="tab" href="#tab-33" role="tab"
                                                aria-controls="tab-33" aria-selected="false">Details</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-bs-toggle="tab" href="#tab-22" role="tab" aria-controls="tab-22"
                                                aria-selected="false">Bids</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-bs-toggle="tab" href="#tab-11" role="tab" aria-controls="tab-11"
                                                aria-selected="true">History</a>
                                        </li>
                                    </ul>
                
                
                                    <div className="tab-content">
                
                                        {/* <!-- details tab --> */}
                                        <div className="tab-pane fade show active" id="tab-33" role="tabpanel">
                                            <div className="asset__desc--tab">
                                                <p>
                                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                    doloremque laudantium totam rem aperiam eaque ipsa quae ab illo.
                                                </p>
                                                <div className="asset__desc--content">
                                                    <div className="asset__desc-list">
                                                        <span> <FaIcons.FaUser/>Item Artist </span>
                                                        <span> Marilyn Root </span>
                                                    </div>
                                                    <div className="asset__desc-list">
                                                        <span> <FaIcons.FaClock/>Created </span>
                                                        <span> 25 Sep 2021 </span>
                                                    </div>
                                                    <div className="asset__desc-list">
                                                        <span> <FaIcons.FaJournalWhills/>Item Size </span>
                                                        <span> 2200 x 2500 </span>
                                                    </div>
                                                    <div className="asset__desc-list">
                                                        <span> <FaIcons.FaLayerGroup/>Formats </span>
                                                        <span> MP4, JPEG </span>
                                                    </div>
                                                    <div className="asset__desc-list">
                                                        <span> <FaIcons.FaDownload/>Downloadable file </span>
                                                        <span> Yes </span>
                                                    </div>
                                                    <div className="asset__desc-list">
                                                        <span> <FaIcons.FaBook/>Edition </span>
                                                        <span> 1/1 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                
                                        {/* <!-- bid tab --> */}
                                        <div className="tab-pane fade" id="tab-22" role="tabpanel">
                                            <div className="asset__actions">
                                                <div className="asset__action asset__action--verified">
                                                    <img src="assets/img/avatars/8.jpg" alt=""/>
                                                    <p>Bid placed for <b>12.00 ETH</b> 2 hours ago <br/>by <a
                                                            href="author.html">@kimberly28</a></p>
                                                </div>
                
                                                <div className="asset__action asset__action--verified">
                                                    <img src="assets/img/avatars/9.jpg" alt=""/>
                                                    <p>Bid placed for <b>9.25 ETH</b> 3 hours ago <br/>by <a
                                                            href="author.html">@nessler520</a></p>
                                                </div>
                
                                                <div className="asset__action asset__action--verified">
                                                    <img src="assets/img/avatars/10.jpg" alt=""/>
                                                    <p>Bid placed for <b>10.21 ETH</b> 4 hours ago <br/>by <a
                                                            href="author.html">@kimberly120</a></p>
                                                </div>
                                            </div>
                                        </div>
                
                
                                        {/* <!-- history tab --> */}
                                        <div className="tab-pane fade" id="tab-11" role="tabpanel">
                                            <div className="asset__actions asset__actions--scroll" id="asset__actions--scroll">
                                                <div className="asset__action asset__action--verified">
                                                    <img src="assets/img/avatars/8.jpg" alt=""/>
                                                    <p>Bid placed for <b>12.00 ETH</b> 2 hours ago <br/>by <a
                                                            href="author.html">@kimberly28</a></p>
                                                </div>
                
                                                <div className="asset__action asset__action--verified">
                                                    <img src="assets/img/avatars/9.jpg" alt=""/>
                                                    <p>Bid placed for <b>9.25 ETH</b> 3 hours ago <br/>by <a
                                                            href="author.html">@nessler520</a></p>
                                                </div>
                
                                                <div className="asset__action asset__action--verified">
                                                    <img src="assets/img/avatars/10.jpg" alt=""/>
                                                    <p>Bid placed for <b>10.21 ETH</b> 4 hours ago <br/>by <a
                                                            href="author.html">@kimberly120</a></p>
                                                </div>
                
                                                <div className="asset__action asset__action--verified">
                                                    <img src="assets/img/avatars/11.jpg" alt=""/>
                                                    <p>Bid placed for <b>12.21 ETH</b> 6 hours ago <br/>by <a
                                                            href="author.html">@humphrey124</a></p>
                                                </div>
                                            </div>
                                        </div>
                
                                    </div>
                                    {/* <!-- end tabs --> */}
                
                                    <div className="asset__wrap">
                                        <div className="asset__timer asset__timer2">
                                            <span><FaIcons.FaStopwatch/> Auction ends in</span>
                                            <div className="asset__clock"></div>
                                        </div>
                
                                        <div className="asset__price">
                                            <span>Minimum bid</span>
                                            <span>0.9 ETH</span>
                                        </div>
                                    </div>
                
                                    {/* <!-- actions --> */}
                                    <div className="asset__btns">
                                        <a href="#modal-bid" className="asset__btn open-modal">Place a bid</a>
                                    </div>
                                    {/* <!-- end actions --> */}
                                </div>
                            </div>
                            {/* <!-- end sidebar --> */}
                        </div>
                        {/* <!-- explore --> */}
                        <section className="explore-area">
                            <div className="container">
                                <div className="row row--grid">
                                    {/* <!-- title --> */}
                                    <div className="col-12">
                                        <div className="main__title">
                                            <h2><a href="explore-all.html">Explore More NFTs</a></h2>
                                        </div>
                                    </div>
                                    {/* <!-- end title --> */}
        
                                    {/* <!-- carousel --> */}
                                    <div className="col-12">
                                        <div className="main__carousel-wrap">
                                            <div className="main__carousel main__carousel--explore owl-carousel" id="explore">
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
        
                                                <div className="card">
                                                    <a href="item.html" className="card__cover">
                                                        <img src="assets/img/items/7.jpg" alt=""/>
                                                    </a>
                                                    <h3 className="card__title"><a href="item.html">Beautiful Leaf In The Wall</a>
                                                    </h3>
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
        
                                                <div className="card">
                                                    <a href="item.html" className="card__cover">
                                                        <img src="assets/img/items/5.jpg" alt=""/>
                                                    </a>
                                                    <h3 className="card__title"><a href="item.html">Colorful Fantacy
                                                            Flowers</a></h3>
                                                    <div className="card__author card__author--verified">
                                                        <img src="assets/img/avatars/5.jpg" alt=""/>
                                                        <a href="author.html">@patricia458</a>
                                                    </div>
                                                    <div className="card__info">
                                                        <div className="card__price">
                                                            <span>Sale price</span>
                                                            <span>4.25 ETH</span>
                                                        </div>
        
                                                        <button className="card__likes card__likes--active" type="button">
                                                            <i className="far fa-heart text-danger"></i>
                                                            <span>100k</span>
                                                        </button>
                                                    </div>
                                                </div>
        
                                                <div className="card">
                                                    <a href="item.html" className="card__cover">
                                                        <img src="assets/img/items/4.jpg" alt=""/>
                                                    </a>
                                                    <h3 className="card__title"><a href="item.html">Let's Go The Navy Blue
                                                            Galaxies</a></h3>
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
        
                                                <div className="card">
                                                    <a href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                                                        className="card__cover card__cover--video open-video">
                                                        <img src="assets/img/items/3.jpg" alt=""/>
                                                        <i className="far fa-video"></i>
                                                    </a>
                                                    <h3 className="card__title"><a href="item.html">3D Ethereum In Diamond</a></h3>
                                                    <div className="card__author card__author--verified">
                                                        <img src="assets/img/avatars/3.jpg" alt=""/>
                                                        <a href="author.html">@sheilagne22</a>
                                                    </div>
                                                    <div className="card__info">
                                                        <div className="card__price">
                                                            <span>Sale price</span>
                                                            <span>5.39 ETH</span>
                                                        </div>
        
                                                        <button className="card__likes" type="button">
                                                            <i className="far fa-heart"></i>
                                                            <span>10k</span>
                                                        </button>
                                                    </div>
                                                </div>
        
                                                <div className="card">
                                                    <a href="item.html" className="card__cover">
                                                        <img src="assets/img/items/2.jpg" alt=""/>
                                                    </a>
                                                    <h3 className="card__title"><a href="item.html">Fantacy Of Water Drop</a></h3>
                                                    <div className="card__author card__author--verified">
                                                        <img src="assets/img/avatars/2.jpg" alt=""/>
                                                        <a href="author.html">@kimberly120</a>
                                                    </div>
                                                    <div className="card__info">
                                                        <div className="card__price">
                                                            <span>Sale price</span>
                                                            <span>3.66 ETH</span>
                                                        </div>
        
                                                        <button className="card__likes" type="button">
                                                            <i className="far fa-heart"></i>
                                                            <span>1k</span>
                                                        </button>
                                                    </div>
                                                </div>
        
                                            </div>
        
                                            <button className="main__nav main__nav--prev" data-nav="#explore" type="button"><i
                                                    className="far fa-arrow-left"></i></button>
                                            <button className="main__nav main__nav--next" data-nav="#explore" type="button"><i
                                                    className="far fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                    {/* <!-- end carousel --> */}
                                </div>
                            </div>
                        </section>
                        {/* <!-- end explore --> */}
                    </div>
                </div>
                {/* <!-- end item single --> */}
        
            </main>
            // <!-- end main content -->
    )
}

export default NftDetail