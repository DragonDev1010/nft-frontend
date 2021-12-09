import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from '../Marketplace.module.css'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import Favorite from './Favorite';
function Item(props: any) {
    const [img, setImg] = useState('')
    function arrayBufferToBase64(buffer:any) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }
    function getImg(buffer:any) {
        let temp = 'data:image/jpeg;base64,' + arrayBufferToBase64(buffer)
        setImg(temp)
    }
    useEffect(() => {
        getImg(props.nft.img.data.data)
    }, [])
    return (
        <div className={styles.listItem}>
            <Favorite idx={props.idx}/>
            <Link to={`/assets/${props.idx}`}>
                <div className={styles.itemImg}>
                    <img src = {img}></img>
                </div>
                <div className={styles.itemDes}>
                    <div className={styles.itemDesTop}>
                        <div className={styles.itemTitle}>
                            <p className={styles.itemCollection}>{props.nft.collects}
                                <svg id="icons8-verified-badge" xmlns="http://www.w3.org/2000/svg" width="21.451" height="21.451" viewBox="0 0 21.451 21.451">
                                    <path id="Path_1" data-name="Path 1" d="M12.726,2,14.92,4.438l3.169-.975.731,3.169,3.169.731-.975,3.169,2.438,2.194L21.014,14.92l.975,3.169-3.169.731-.731,3.169-3.169-.975-2.194,2.438-2.194-2.438-3.169.975L6.632,18.82l-3.169-.731.975-3.169L2,12.726l2.438-2.194L3.463,7.363l3.169-.731.731-3.169,3.169.975Z" transform="translate(-2 -2)" fill="#42a5f5"/>
                                    <path id="Path_2" data-name="Path 2" d="M21.706,14.6l-5.629,7.924-2.318-3.263L12.6,20.892l3.477,4.894,6.788-9.555Z" transform="translate(-6.424 -9.385)" fill="#e3f2fd"/>
                                </svg>
                            </p>

                            <p className={styles.itemId}>{props.nft.name}</p>
                        </div>
                        <div className={styles.itemPrice}>
                            <p>Price</p>
                            <p className={styles.itemPriceValue}>
                                <svg id="icons8-ethereum" xmlns="http://www.w3.org/2000/svg" width="12.69" height="19.942" viewBox="0 0 12.69 19.942">
                                    <path id="Path_3" data-name="Path 3" d="M11,11.971,17.345,2l6.345,9.971L17.345,15.6Z" transform="translate(-11 -2)" fill="#7880e7"/>
                                    <path id="Path_4" data-name="Path 4" d="M25,2l6.345,9.971L25,15.6Z" transform="translate(-18.655 -2)" fill="#5c64c7"/>
                                    <path id="Path_5" data-name="Path 5" d="M11,27l6.345,3.626L23.69,27l-6.345,8.611Z" transform="translate(-11 -15.669)" fill="#7880e7"/>
                                    <path id="Path_6" data-name="Path 6" d="M17.345,25.7l6.345-3.626L17.345,30.69ZM11,20.719,17.345,18l6.345,2.719-6.345,3.626Z" transform="translate(-11 -10.748)" fill="#5c64c7"/>
                                    <path id="Path_7" data-name="Path 7" d="M25,18l6.345,2.719L25,24.345Z" transform="translate(-18.655 -10.748)" fill="#2a3192"/>
                                </svg>
                                <b>{props.nft.price}</b>
                            </p>
                        </div>
                    </div>
                    
                    <div className={styles.itemOffer}>
                        Offer for  <b>0.2742</b>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;