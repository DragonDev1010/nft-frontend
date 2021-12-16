import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Home.module.css'
import * as FaIcons from "react-icons/fa"

function Intro() {
    return (
        <div className={styles.introWrap}>
            <p className={styles.introText}>
            Explore the universe and <br/>
            give life to your very <br/>
            own stars!
            </p>
            <div className={styles.introBtnWrap}>
                {/* <button>Enter</button> */}
                <button><NavLink to="/assets">Explore</NavLink></button>
            </div>
            <p className={styles.buySGE}>
                <FaIcons.FaShoppingCart size={18}/>
                <span>Buy SGE tokens to access STARSEAS</span>
            </p>
        </div>
    )
}

export default Intro;
