import React from 'react'
import styles from './Home.module.css'
import * as FaIcons from "react-icons/fa"

function Intro() {
    return (
        <div className={styles.introWrap}>
            <p className={styles.introText}>
                Lorem ipsum dolor sit amet, <br/>
                consectetur adipiscing elit.<br/>
                NFTs
            </p>
            <div className={styles.introBtnWrap}>
                <button>Enter</button>
                <button>Explorer</button>
            </div>
            <p className={styles.buySOGE}>
                <FaIcons.FaShoppingCart size={18}/>
                <span>Buy SOGE tokens to use on StarSeas</span>
            </p>
        </div>
    )
}

export default Intro;
