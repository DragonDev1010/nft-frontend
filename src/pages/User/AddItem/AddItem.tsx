import * as FaIcons from 'react-icons/fa'

function AddItem() {
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
                                    <a href="#" className="fab fa-linkedin-in"></a>
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
    
    
                    {/* <!-- create --> */}
                    <div className="col-12 col-xl-9">
                        {/* <!-- title --> */}
                        <div className="main__title main__title--create">
                            <h2>Create New NFT</h2>
                        </div>
                        {/* <!-- end title --> */}
    
    
                        {/* <!-- create form --> */}
                        <form action="#" className="sign__form sign__form--create">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="sign__title">Upload File</h4>
                                </div>
    
                                <div className="col-12">
                                    <div className="sign__file">
                                        <label id="file1" htmlFor="sign__file-upload"> <i className="far fa-upload"></i> Upload File (e. g. Image, Audio, Video) </label>
                                        <input data-name="#file1" id="sign__file-upload" name="file" className="sign__file-upload" type="file" accept="video/mp4,video/x-m4v,video/*,.png,.jpg,.jpeg"/>
                                    </div>
                                </div>
    
                                <div className="col-12">
                                    <h4 className="sign__title">Item Details</h4>
                                </div>
    
                                <div className="col-12">
                                    <div className="sign__group">
                                        <label className="sign__label" htmlFor="itemname">Item Name</label>
                                        <input id="itemname" type="text" name="itemname" className="sign__input" placeholder="e. g. 'Fantacy Flower'"/>
                                    </div>
                                </div>
    
                                <div className="col-12">
                                    <div className="sign__group">
                                        <label className="sign__label" htmlFor="description">Description</label>
                                        <textarea id="description" name="description" className="sign__textarea" placeholder="e. g. 'After purchased you will get downloadable zip file'"></textarea>
                                    </div>
                                </div>
    
                                <div className="col-12 col-md-4">
                                    <div className="sign__group">
                                        <label className="sign__label" htmlFor="number_of_copies">Number of Copies</label>
                                        <select id="number_of_copies" name="number_of_copies" className="sign__select">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
    
                                <div className="col-12 col-md-4">
                                    <div className="sign__group">
                                        <label className="sign__label" htmlFor="category">Category</label>
                                        <select id="category" name="category" className="sign__select">
                                            <option value="1">Clusters</option>
                                            <option value="2">Creatives</option>
                                            <option value="3">Galaxies</option>
                                            <option value="4">Lunar</option>
                                            <option value="5">Nebulae</option>
                                            <option value="6">Sci-Fi</option>
                                            <option value="7">Solar</option>
                                        </select>
                                    </div>
                                </div>
    
                                <div className="col-12 col-md-4">
                                    <div className="sign__group">
                                        <label className="sign__label" htmlFor="propertie">Royalty Percentage</label>
                                        <input id="propertie" type="text" name="propertie" className="sign__input" placeholder="5%"/>
                                    </div>
                                </div>
    
                                <div className="col-12">
                                    <div className="sign__group sign__group--row">
                                        <ul className="sign__radio sign__radio--single">
                                            <li>
                                                <input id="type1" type="radio" name="type" checked={true}/>
                                                <label htmlFor="type1">Published for sale</label>
                                            </li>
                                            <li>
                                                <input id="type2" type="radio" name="type"/>
                                                <label htmlFor="type2">Save & publish later</label>
                                            </li>
                                            <li>
                                                <input id="type3" type="radio" name="type"/>
                                                <label htmlFor="type3">Unlock sale</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
    
                                <div className="col-12 col-xl-3">
                                    <button type="button" className="sign__btn">Create item</button>
                                </div>
                            </div>
                        </form>
                        {/* <!-- end create form --> */}
                        
    
                    </div>
                    {/* <!-- end create --> */}
    
                </div>
    
            </div>
            
        </main>
        // <!-- end main content -->
    )
}

export default AddItem