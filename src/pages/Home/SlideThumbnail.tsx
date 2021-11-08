import React from 'react'
import styles from './Home.module.css'
import thumbnailImg from '../../assets/homeSlide.png'
import userLogo from '../../assets/UserLogoSlider.png'
import * as FaIcons from 'react-icons/fa'
function SlideThumbnail() {

    return (
        <div className={styles.slideThumbnail}>
            <img src={thumbnailImg}></img>
            <div className={styles.thumbDetailWrap}>
                <img src={userLogo} className={styles.userLogoSlide}></img>
                <div className={styles.thumbDetail}>
                    <p>Nice cool helmet with horns</p>
                    <p>@RogerMalcomSells</p>
                </div>
                <FaIcons.FaInfoCircle size={20}/>
            </div>
        </div>
    )
}

export default SlideThumbnail