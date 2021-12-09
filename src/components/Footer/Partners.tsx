import styles from './Footer.module.css'

function Partners() {
    return (
        <div className={styles.partnerWrap}>
            <p className={styles.itemTitle}>Partners</p>
            <ul>
                <li><a>SGE</a></li>
                <li><a>Down Under Observatory</a></li>
                <li><a>CoinMarketCap</a></li>
            </ul>
        </div>
    )
}

export default Partners