import * as FaIcons from 'react-icons/fa'

function Profile() {
    return(
        // <!-- main content -->
        <main className="main">
            <div className="main__author" data-bg="assets/img/authors/banner.jpg"></div>
            <div className="container">
                <div className="row row--grid">
                    <div className="col-12 col-xl-3">
                        <div className="author author--page">
                            <div className="author__meta">
                                <a href="author.html" className="author__avatar author__avatar--verified">
                                    <img src="assets/img/avatars/avatar-1.jpg" alt=""/>
                                </a>
                                <h1 className="author__name"><a href="author.html">Susa Condrey</a></h1>
                                <h2 className="author__nickname"><a href="author.html">@condrey21</a></h2>
                                <p className="author__text">There are many variations of passages orem psum available but the
                                    majority have suffered alteration.</p>
                                <div className="author__code">
                                    <input type="text" value="4fgddgwdfgfew5345353fdfdf3454edrgertt4rgre4" id="author-code"/>
                                    <button type="button">
                                        <span>Copied</span>
                                        <i className="far fa-copy"></i>
                                    </button>
                                </div>
                                <a href="#" className="author__link"> <i className="far fa-globe"></i> https://example.com</a>
                                <div className="author__social">
                                    <a href="#" className="fab fa-facebook-f"></a>
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-instagram"></a>
                                    <a href="#" className="fab fa-telegram"></a>
                                </div>
                                <div className="author__wrap">
                                    <div className="author__followers">
                                        <p>5.5k</p>
                                        <span>Followers</span>
                                    </div>
                                    <button className="author__follow" type="button">Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-12 col-xl-9">
                        <div className="profile">
                            {/* <!-- tabs nav --> */}
                            <ul className="nav nav-tabs profile__tabs" id="profile__tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#tab-1" role="tab"
                                        aria-controls="tab-1" aria-selected="true"><i className="far fa-box"></i> For Sale</a>
                                </li>
    
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2"
                                        aria-selected="false"><i className="far fa-layer-group"></i> Unlisted</a>
                                </li>
                                
                                
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3"
                                        aria-selected="false"><i className="far fa-layer-group"></i> Activity</a>
                                </li>
                                
    
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4"
                                        aria-selected="false"><i className="far fa-list-ul"></i> Settings</a>
                                </li>
    
                            </ul>
                            {/* <!-- end tabs nav --> */}
                        </div>
    
                        {/* <!-- content tabs --> */}
                        <div className="tab-content">
    
                            {/* <!-- tab 1 --> */}
                            <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
                                <div className="row row--grid">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <a href="item.html" className="card__cover">
                                                <img src="assets/img/items/1.jpg" alt=""/>
                                            </a>
                                            <h3 className="card__title"><a href="item.html">Awesome Color
                                                    Drop</a></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="assets/img/avatars/15.jpg" alt=""/>
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
    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <a href="item.html" className="card__cover">
                                                <img src="assets/img/items/2.jpg" alt=""/>
                                            </a>
                                            <h3 className="card__title"><a href="item.html">Awesome Color
                                                    Drop</a></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="assets/img/avatars/15.jpg" alt=""/>
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
    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <a href="item.html" className="card__cover">
                                                <img src="assets/img/items/3.jpg" alt=""/>
                                            </a>
                                            <h3 className="card__title"><a href="item.html">Awesome Color
                                                    Drop</a></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="assets/img/avatars/15.jpg" alt=""/>
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
    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <a href="item.html" className="card__cover">
                                                <img src="assets/img/items/4.jpg" alt=""/>
                                            </a>
                                            <h3 className="card__title"><a href="item.html">Awesome Color
                                                    Drop</a></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="assets/img/avatars/15.jpg" alt=""/>
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
    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <a href="item.html" className="card__cover">
                                                <img src="assets/img/items/5.jpg" alt=""/>
                                            </a>
                                            <h3 className="card__title"><a href="item.html">Awesome Color
                                                    Drop</a></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="assets/img/avatars/15.jpg" alt=""/>
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
    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <a href="item.html" className="card__cover">
                                                <img src="assets/img/items/6.jpg" alt=""/>
                                            </a>
                                            <h3 className="card__title"><a href="item.html">Awesome Color
                                                    Drop</a></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="assets/img/avatars/15.jpg" alt=""/>
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
                                </div>
    
                                <div className="row row--grid">
                                    <div className="col-12">
                                        <button className="main__load" type="button">Load more</button>
                                    </div>
                                </div>
    
                            </div>
    
                            {/* <!-- tab 2 --> */}
                            <div className="tab-pane fade" id="tab-2" role="tabpanel">
                                <div className="row row--grid">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <a href="item.html" className="card__cover">
                                                <img src="assets/img/items/1.jpg" alt=""/>
                                            </a>
                                            <h3 className="card__title"><a href="item.html">Awesome Color
                                                    Drop</a></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="assets/img/avatars/15.jpg" alt=""/>
                                                <a href="author.html">@morgan28</a>
                                            </div>
                                            <div className="card__info">
                                                <button className="author__follow" type="button">LIST NFT</button>
    
                                                <button className="card__likes" type="button">
                                                    <i className="far fa-heart"></i>
                                                    <span>6k</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <a href="item.html" className="card__cover">
                                                <img src="assets/img/items/2.jpg" alt=""/>
                                            </a>
                                            <h3 className="card__title"><a href="item.html">Awesome Color
                                                    Drop</a></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="assets/img/avatars/15.jpg" alt=""/>
                                                <a href="author.html">@morgan28</a>
                                            </div>
                                            <div className="card__info">
                                                <button className="author__follow" type="button">LIST NFT</button>
    
                                                <button className="card__likes" type="button">
                                                    <i className="far fa-heart"></i>
                                                    <span>6k</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <a href="item.html" className="card__cover">
                                                <img src="assets/img/items/3.jpg" alt=""/>
                                            </a>
                                            <h3 className="card__title"><a href="item.html">Awesome Color
                                                    Drop</a></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="assets/img/avatars/15.jpg" alt=""/>
                                                <a href="author.html">@morgan28</a>
                                            </div>
                                            <div className="card__info">
                                                <button className="author__follow" type="button">LIST NFT</button>
    
                                                <button className="card__likes" type="button">
                                                    <i className="far fa-heart"></i>
                                                    <span>6k</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <a href="item.html" className="card__cover">
                                                <img src="assets/img/items/4.jpg" alt=""/>
                                            </a>
                                            <h3 className="card__title"><a href="item.html">Awesome Color
                                                    Drop</a></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="assets/img/avatars/15.jpg" alt=""/>
                                                <a href="author.html">@morgan28</a>
                                            </div>
                                            <div className="card__info">
                                                <button className="author__follow" type="button">LIST NFT</button>
                                                <button className="card__likes" type="button">
                                                    <i className="far fa-heart"></i>
                                                    <span>6k</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <a href="item.html" className="card__cover">
                                                <img src="assets/img/items/5.jpg" alt=""/>
                                            </a>
                                            <h3 className="card__title"><a href="item.html">Awesome Color
                                                    Drop</a></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="assets/img/avatars/15.jpg" alt=""/>
                                                <a href="author.html">@morgan28</a>
                                            </div>
                                            <div className="card__info">
                                                <button className="author__follow" type="button">LIST NFT</button>
    
                                                <button className="card__likes" type="button">
                                                    <i className="far fa-heart"></i>
                                                    <span>6k</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <a href="item.html" className="card__cover">
                                                <img src="assets/img/items/6.jpg" alt=""/>
                                            </a>
                                            <h3 className="card__title"><a href="item.html">Awesome Color
                                                    Drop</a></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="assets/img/avatars/15.jpg" alt=""/>
                                                <a href="author.html">@morgan28</a>
                                            </div>
                                            <div className="card__info">
                                                <button className="author__follow" type="button">LIST NFT</button>
    
                                                <button className="card__likes" type="button">
                                                    <i className="far fa-heart"></i> 
                                                    <span>6k</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                {/* <!-- paginator --> */}
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
                                {/* <!-- end paginator --> */}
                            </div>
    
            
            
    
                            {/* <!-- tab 3 --> */}
                            <div className="tab-pane fade" id="tab-3" role="tabpanel">
                                <div className="row">
                                    {/* <!-- sidebar --> */}
                                    <div className="col-12 col-xl-4 order-xl-2">
                                        <div className="filter-wrap">
                                            <div className="collapse filter-wrap__content" id="collapseFilter">
                                                {/* <!-- filter --> */}
                                                <div className="filter filter--sticky">
                                                    <h4 className="filter__title">Filters <button type="button">Clear all</button></h4>
                    
                                                    <div className="filter__group">
                                                        <ul className="filter__checkboxes">
                                                            <li>
                                                                <input id="type5" type="checkbox" name="type5" checked={true}/>
                                                                <label htmlFor="type5">Listings</label>
                                                            </li>
                                                            <li>
                                                                <input id="type6" type="checkbox" name="type6"/>
                                                                <label htmlFor="type6">Purchases</label>
                                                            </li>
                                                            <li>
                                                                <input id="type7" type="checkbox" name="type7" checked={true}/>
                                                                <label htmlFor="type7">Sales</label>
                                                            </li>
                                                            <li>
                                                                <input id="type8" type="checkbox" name="type8"/>
                                                                <label htmlFor="type8">Transfers</label>
                                                            </li>
                                                            <li>
                                                                <input id="type9" type="checkbox" name="type9"/>
                                                                <label htmlFor="type9">Bids</label>
                                                            </li>
                                                            <li>
                                                                <input id="type10" type="checkbox" name="type10" checked={true}/>
                                                                <label htmlFor="type10">Likes</label>
                                                            </li>
                                                            <li>
                                                                <input id="type11" type="checkbox" name="type11"/>
                                                                <label htmlFor="type11">Followings</label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* <!-- end filter --> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end sidebar --> */}
    
                                    {/* <!-- content --> */}
                                    <div className="col-12 col-xl-8 order-xl-1">
                                        <div className="row row--grid">
                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <a href="item.html" className="activity__cover">
                                                        <img src="assets/img/items/1.jpg" alt=""/>
                                                    </a>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><a href="item.html">Awesome Color Drop</a></h3>
                                                        <p className="activity__text">listed by <a href="author.html">@morgan28</a> <br/>for <b>0.560 ETH</b></p>
                                                        <span className="activity__time">10 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <a href="item.html" className="activity__cover">
                                                        <img src="assets/img/items/2.jpg" alt=""/>
                                                    </a>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><a href="item.html">Beautiful Leaf In The Wall</a></h3>
                                                        <p className="activity__text">5 editions listed by <a href="author.html">@nessler520</a> <br/>for <b>0.120 ETH</b> each</p>
                                                        <span className="activity__time">15 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <a href="item.html" className="activity__cover">
                                                        <img src="assets/img/items/3.jpg" alt=""/>
                                                    </a>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><a href="item.html">Blue Planet Revolution</a></h3>
                                                        <p className="activity__text">purchased by <a href="author.html">@kimberly28</a> <b>3f34gdg4d...we45</b> for <b>0.324 ETH</b> from <a href="author.html">@tiigula</a></p>
                                                        <span className="activity__time">20 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <a href="item.html" className="activity__cover">
                                                        <img src="assets/img/items/4.jpg" alt=""/>
                                                    </a>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><a href="item.html">Let's Go The Navy Blue Galaxies</a></h3>
                                                        <p className="activity__text">transferred from <a href="author.html">@humphrey124</a> <br/>to <a href="author.html">@miloza</a></p>
                                                        <span className="activity__time">25 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="row row--grid">
                                            <div className="col-12">
                                                <button className="main__load" type="button">Load more</button>
                                            </div>
                                        </div>
    
                                    </div>
                                    {/* <!-- end content --> */}
                                </div>
                            </div>
    
                            {/* <!-- tab 4 --> */}
                            <div className="tab-pane fade" id="tab-4" role="tabpanel">
                                <div className="row row--grid">
                                    {/* <!-- details form --> */}
                                    <div className="col-12 col-lg-6">
                                        <form action="#" className="sign__form sign__form--profile">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h4 className="sign__title">Profile Details</h4>
                                                </div>
    
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="username">Username</label>
                                                        <input id="username" type="text" name="username" className="sign__input"
                                                            placeholder="condrey21"/>
                                                    </div>
                                                </div>
    
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="email">Email</label>
                                                        <input id="email" type="text" name="email" className="sign__input"
                                                            placeholder="test@example.com"/>
                                                    </div>
                                                </div>
    
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="firstname">First Name</label>
                                                        <input id="firstname" type="text" name="firstname"
                                                            className="sign__input" placeholder="Susa"/>
                                                    </div>
                                                </div>
    
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="lastname">Last name</label>
                                                        <input id="lastname" type="text" name="lastname" className="sign__input"
                                                            placeholder="Condrey"/>
                                                    </div>
                                                </div>
    
                                                <div className="col-12">
                                                    <button className="sign__btn" type="button">Save</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <!-- end details form --> */}
    
                                    {/* <!-- socials form --> */}
                                    <div className="col-12 col-lg-6">
                                        <form action="#" className="sign__form sign__form--profile">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h4 className="sign__title">Socials</h4>
                                                </div>
    
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="facebook">Facebook</label>
                                                        <input id="facebook" type="text" name="facebook" className="sign__input"
                                                            placeholder="https://www.facebook.com/"/>
                                                    </div>
                                                </div>
    
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="twitter">Twitter</label>
                                                        <input id="twitter" type="text" name="twitter" className="sign__input"
                                                            placeholder="https://twitter.com/?lang=en"/>
                                                    </div>
                                                </div>
    
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="firstname">Instagram</label>
                                                        <input id="instagram" type="text" name="instagram"
                                                            className="sign__input" placeholder="https://www.instagram.com/"/>
                                                    </div>
                                                </div>
    
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="telegram">Telegram</label>
                                                        <input id="telegram" type="text" name="telegram" className="sign__input"
                                                            placeholder="t.me/"/>
                                                    </div>
                                                </div>
    
                                                <div className="col-12">
                                                    <button className="sign__btn" type="button">Update</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <!-- end socials form --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- end content tabs --> */}
                    </div>
                </div>
            </div>					
                      
    
        </main>
        // <!-- end main content -->
    )
}

export default Profile