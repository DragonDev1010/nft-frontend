import styles from './Footer.module.css'
import Logo from './Logo'
import Explorer from './Explore'
import Social from './Socials'
import Profile from './Profile'
import Partners from './Partners'
import { profile } from 'console'

import logoLight from '../../assets/img/logo/logo-light.png'
import * as FaIcons from 'react-icons/fa'
function Footer() {
    return (
        // <div className={styles.footerWrap}>
        //     <div className={styles.footerBody}>
        //         <Logo />
        //         <Explorer />
        //         <Social />
        //         <Profile />
        //         <Partners />
        //     </div>
        //     <div className={styles.footerBottom}>
        //         <span>&copy;</span> Starseas Marketplace, 2021 All Rights Reserved
        //     </div>
        // </div>
        <footer className = "footer">
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-3">
                        <div className = "footer__logo">
                            <img src={logoLight} alt=""/>
                        </div>
                        <p className = "footer__tagline">
                            The first NFT platform designed to celebrate and enocurage space exploration. Create, sell, and collect stunning NFTS that are quite literally out of this world!  
                        </p>

                    </div>

                    <div className = "col-md-2">
                        <h6 className = "footer__title">Starseas</h6>
                        <div className = "footer__nav">
                            <a href="activity.html">Activity</a>
                            <a href="about.html">About</a>
                            <a href="wallet-connect.html">Wallet Connect</a>
                            <a href="terms.html">Terms & Conditions</a>
                            <a href="privacy.html">Privacy Policy</a>
                            <a href="cookie.html">Cookie Policy</a>
                            <a href="acceptable.html">Acceptable Use Policy</a>
                            
                        </div>
                    </div>

                    <div className = "col-md-2">
                        <h6 className = "footer__title">Explore</h6>
                        <div className = "footer__nav">
                            <a href="#">Clusters</a>
                            <a href="#">Creatives</a>
                            <a href="#">Galaxies</a>
                            <a href="#">Lunar</a>
                            <a href="#">Nebulae</a>
                            <a href="#">Sci-Fi</a>
                            <a href="#">Solar</a>
                        </div>
                    </div>
                    <div className = "col-md-2">
                        <h6 className = "footer__title">Community</h6>
                        <div className = "footer__nav">
                            <a href="faq.html">F&Q</a>
                            <a href="contact.html">Contact</a>
                            <a href="authors.html">Creators</a>
                        </div>
                    </div>
                    <div className = "col-md-3">
                        <h6 className = "footer__title">Stay up to Date</h6>
                        <div className = "footer-newsletter">
                            <p>Subscribe to our newsletter for future updates! .</p>
                            <form action="#">
                                <input type="email" placeholder="Enter your email"/>
                                <button type="submit"><i className = "far fa-paper-plane"></i> Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-12">
                        <div className = "footer__content">
                            <div className = "footer__social">
                                <a href="https://www.facebook.com/sge.spaceofficial/" target="_blank" >
                                    <FaIcons.FaFacebookF />
                                </a>
                                <a href="https://twitter.com/starseasnft" target="_blank" >
                                    <FaIcons.FaTwitter /> 
                                </a>
                                <a href="https://t.me/SGEVerificationPortal" target="_blank" >
                                     <FaIcons.FaTelegram /> 
                                </a>
                                <a href="https://www.instagram.com/sge.official_/?hl=en" target="_blank"> 
                                    <FaIcons.FaInstagram /> 
                                </a>
                                <a href="https://www.youtube.com/channel/UCkiGgGgFEFbjgk3ru8FI6Nw" target="_blank"> 
                                    <FaIcons.FaYoutube />
                                </a>
                                <a href="https://www.reddit.com/r/SGEofficial/"target="_blank"  > 
                                    <FaIcons.FaReddit />
                                </a>
                            </div>

                            <small className = "footer__copyright">© Copyright 2021 <a href="#">Starseas</a> All Rights Reserved.</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer