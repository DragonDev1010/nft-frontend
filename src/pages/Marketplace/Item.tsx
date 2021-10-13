import React from 'react'
import styles from './Marketplace.module.css'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import itemImg from '../../assets/spaceItem.png'
function Item() {
    console.log(itemImg)
    return (
        <div className={styles.item}>
            <div className={styles.itemFavorite}>
                <FontAwesomeIcon icon={faHeart}/>
            </div>
            <div className={styles.itemImg}>
                <img src = {itemImg}></img>
            </div>
            <div className={styles.itemDes}>
                <div className={styles.itemTitle}>
                    <p className={styles.itemCollection}>Winter Bears</p>
                    <p className={styles.itemId}>Winter Bear #7590</p>
                </div>
                <div className={styles.itemPrice}>
                    <p>price</p>
                    <p><i></i>0.59</p>
                </div>
                <div className={styles.itemOffer}>
                    Offer for 0.2742
                </div>
            </div>
        </div>
    )
}

export default Item;