import { useState, useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'
function Card(props: any) {
    const [itemImg, setItemImg] = useState('')
    const [avatarImg, setAvatarImg] = useState('')
    const [favCount, setFavConut] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const title = "Title"
    const userName = "User1"
    const price = 10
    function arrayBufferToBase64(buffer:any) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }
    function setItemImgData(buffer:any) {
        let temp = 'data:image/jpeg;base64,' + arrayBufferToBase64(buffer)
        setItemImg(temp)
    }
    function setOwnerData() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'users/findByWallet/' + props.details.ownerAddr
        fetch(fetchURL)
            .then(res => res.json())
            .then( res => {
                if(res[0].userImg !== undefined) {
                    let temp = 'data:image/jpeg;base64,' + arrayBufferToBase64(res[0].userImg.data.data)
                    setAvatarImg(temp)
                }
                if(res[0].name !== undefined) {
                    setOwnerName(res[0].name)
                }
            })
    }
    function nFormatter(num:any, digits:any) {
        const lookup = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
          { value: 1e9, symbol: "G" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "P" },
          { value: 1e18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
          return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
    }
    function setFavCountData() {
        if(props.details.favUserIds.length > 0) {
            setFavConut(nFormatter(props.details.favUserIds.length, 1))
        } 
    }
    useEffect(() => {
        setItemImgData(props.details.img.data.data)
        setOwnerData()
        setFavCountData()
    }, [])
    return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
            <div className="card">
                <a href="item.html" className="card__cover">
                    <img src={itemImg} alt=""/>
                </a>
                <h3 className="card__title">
                    <a href="item.html">
                        {props.details.name}
                    </a>
                </h3>
                <div className="card__author card__author--verified">
                    <img src={avatarImg} alt=""/>
                    <a href="author.html">{ownerName}</a>
                </div>
                <div className="card__info">
                    <div className="card__price">
                        <span>Sale price</span>
                        <span>{props.details.price} ETH</span>
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