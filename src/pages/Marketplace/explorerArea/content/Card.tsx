import * as FaIcons from 'react-icons/fa'
function Card(props: any) {
    let itemImg, avatarImg
    const title = "Title"
    const userName = "User1"
    const price = 10
    const favCount = "6k"
    return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
            <div className="card">
                <a href="item.html" className="card__cover">
                    <img src={itemImg} alt=""/>
                </a>
                <h3 className="card__title">
                    <a href="item.html">
                        {title}
                    </a>
                </h3>
                <div className="card__author card__author--verified">
                    <img src={avatarImg} alt=""/>
                    <a href="author.html">{userName}</a>
                </div>
                <div className="card__info">
                    <div className="card__price">
                        <span>Sale price</span>
                        <span>{price} ETH</span>
                    </div>

                    <button className="card__likes" type="button">
                        <FaIcons.FaHeart />
                        <span>{favCount}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card