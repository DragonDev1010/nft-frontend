import styles from './Footer.module.css'
import logo from '../../assets/starseas-final-001.png'
function Logo() {
    return (
        <div className={styles.logoWrap}>
            <img src={logo} />
        </div>
    )
}

export default Logo