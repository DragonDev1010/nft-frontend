import styles from './Footer.module.css'
import Logo from './Logo'
import Explorer from './Explore'
import Social from './Socials'
import Profile from './Profile'
import Partners from './Partners'
import { profile } from 'console'
function Footer() {
    return (
        <div className={styles.footerWrap}>
            <div className={styles.footerBody}>
                <Logo />
                <Explorer />
                <Social />
                <Profile />
                <Partners />
            </div>
            <div className={styles.footerBottom}>
                <span>&copy;</span> Starseas Marketplace, 2021 All Rights Reserved
            </div>
        </div>
    )
}

export default Footer