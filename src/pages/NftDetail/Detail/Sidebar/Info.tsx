import avatar from '../../../../assets/img/avatars/1.jpg'
function Info() {
    return(
        <>
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
        </>
    )
}

export default Info