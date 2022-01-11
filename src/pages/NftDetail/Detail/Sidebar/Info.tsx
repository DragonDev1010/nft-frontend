import avatar from '../../../../assets/img/avatars/1.jpg'
import {useState, useEffect} from 'react'
function Info() {
    const [name, setName] = useState('NFT Name Undefined')
    const [price, setPrice] = useState(0)
    const [creator, setCreator] = useState({
        "name": "Creator Name Undefined",
        "avatar": ""
    })
    return(
        <>
            <div className="asset__desc">
                <h2>{name}</h2>
            </div>

            <ul className="asset__authors">
                <li>
                    <div className="card__price">
                        <span>Sale price</span>
                        <span className="text-danger fw-bolder">{price} ETH</span>
                    </div>
                </li>
                <li>
                    <span>Creator</span>
                    <div className="asset__author asset__author--verified">
                        <img src={avatar} alt=""/>
                        <a href="author.html">{creator.name}</a>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Info